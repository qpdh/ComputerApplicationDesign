import React, {ChangeEvent} from 'react';
import {Button, Input, Table} from 'reactstrap';
import './index.scss';
import {IoIosArrowBack} from "react-icons/io";
import {Exercise} from "../../../../type";


interface Props {
    onClickAddExercise: () => void
    onClickBackButton: () => void
    name: string
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
}

const ExerciseInput = (props: Props) => {
    return(
        <div className={"exercise-list-container"}>
            <Table>
                <thead className={"exercise-list-table-head"}>
                    <tr>
                        <th className={"table-head-content"}>
                            <div>NAME</div>
                            <div
                                className={"back-button"}
                                onClick={props.onClickBackButton}
                            >
                                <IoIosArrowBack/>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <div className={"add-exercise-form"}>
                    <div className={"add-exercise-input-group"}>
                        <Input
                            name={"name"}
                            className={"add-exercise-input"}
                            placeholder={"name"}
                            value={props.name}
                            onChange={props.onChangeInput}
                        />
                    </div>
                    <div className={"add-exercise-button-container"}>
                        <Button
                            onClick={props.onClickAddExercise}
                            className={"add-exercise-button"}
                            color={"success"}
                        >Add</Button>
                    </div>
                </div>
                </tbody>
            </Table>
        </div>
    )
};

export default ExerciseInput;