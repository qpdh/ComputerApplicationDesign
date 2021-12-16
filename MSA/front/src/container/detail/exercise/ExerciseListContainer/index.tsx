import React, { ChangeEvent, useEffect, useReducer, useState } from 'react';
import { Exercise, ExercisePart } from "../../../../type";
import ExerciseList from "../../../../component/detail/exercise/ExerciseList";
import { getFormatDate, getWithAuth, postWithAuth } from "../../../../utils";
import {
    exerciseInputInitialState,
    exerciseInputReducer
} from "../../../../reducers/ExerciseReducer";
import {ExerciseDetailViewMode, ExerciseListViewMode} from "../../../../constants";
import ExerciseInput from "../../../../component/detail/exercise/ExerciseInput";
import {exerciseCreateInputInitialState, exerciseCreateInputReducer} from "../../../../reducers/ExerciseCreateReducer";

interface Props {
    selectedPart: ExercisePart
    handleClickBackButton: () => void
}

const ExerciseListContainer = (props: Props) => {
    const [viewMode, setViewMode] = useState(ExerciseListViewMode.LIST);
    const [exercises, setExercises] = useState<Array<Exercise>>([]);
    const [selectedExercise, setSelectedExercise] = useState<Exercise>();
    const [exerciseInputState, dispatchExerciseInput] = useReducer(exerciseInputReducer, exerciseInputInitialState);

    // @ts-ignore
    const [exerciseCreateInputState, dispatchCreateExerciseInput] = useReducer(exerciseCreateInputReducer, exerciseCreateInputInitialState);

    // const [exerciseCreateInputState, dispatchCreateExerciseInput] = useReducer(exerciseCreateInputReducer, exerciseCreateInputInitialState);

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/exercise?part=${props.selectedPart}`)
            .then(response => response.data)
            .then(data => {
                setExercises(data)
            })
    }, []);

    const handleClickExercise = (exercise: Exercise) => {
        setSelectedExercise(exercise)
    };

    const handleClickAddExercise = () => {
        const today = new Date()
        const data = {
            'exerciseId': selectedExercise!!.id,
            'set': exerciseInputState.sets,
            'rep': exerciseInputState.reps,
            'weight': exerciseInputState.weight,
            'date': getFormatDate(today)
        };

        postWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/exercise/histories`, data)
            .then(response => {
                console.log(process.env.REACT_APP_API_ENDPOINT)
                alert('added exercise successfully')
		window.location.reload();
            })
            .catch(e => {
                alert('add exercise fail')
                console.log(e)
            })
    };


    //운동 추가 함수
    const handleClickCreateExercise = () => {
        const data = {
            'part':props.selectedPart,
            'name': exerciseCreateInputState.name
        };

        postWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/exercise/exercises`, data)
            .then(response => {
                console.log(process.env.REACT_APP_API_ENDPOINT)
                alert('added exercise successfully')
                window.location.reload();
            })
            .catch(e => {
                alert('add exercise fail')
                console.log(e)
            })
    };

    //파트 클릭 시 운동 추가 입력창 보여주는 함수
    const handleClickPart=()=>{
        setViewMode(ExerciseListViewMode.FORM)
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        // @ts-ignore
        dispatchExerciseInput(action)
        dispatchCreateExerciseInput(action)
    };

    return (
        <div>
            {viewMode===ExerciseListViewMode.LIST?
                <ExerciseList
                    onClickPart={handleClickPart}
                    part={props.selectedPart}
                    exercises={exercises}
                    onClickExercise={handleClickExercise}
                    onClickAddExercise={handleClickAddExercise}
                    onClickBackButton={props.handleClickBackButton}
                    selectedExercise={selectedExercise}
                    weight={exerciseInputState.weight}
                    reps={exerciseInputState.reps}
                    sets={exerciseInputState.sets}
                    onChangeInput={handleChangeInput}
                />:
                <ExerciseInput
                               onClickAddExercise={handleClickCreateExercise}
                               onClickBackButton={props.handleClickBackButton}
                               name={exerciseCreateInputState.name}
                               onChangeInput={handleChangeInput}
                               part={props.selectedPart}
                               />
            }
        </div>
    )
};

export default ExerciseListContainer;
