import React, {ChangeEvent, FC, useEffect, useReducer, useState} from 'react';
import './index.scss';
import DietDetailTable from "../../../../component/detail/diet/DietDetailTable";
import {DietDetail, Food} from "../../../../type";
import {getFormatDate, getWithAuth, postWithAuth} from "../../../../utils";
import {ExerciseListViewMode, FoodViewMode} from "../../../../constants";
import {FoodInputReducer, FoodInputInitialState} from "../../../../reducers/FoodReducer";
import FoodInput from "../../../../component/detail/diet/FoodInput";

const DietDetailContainer = () => {
    const [viewMode, setViewMode] = useState(FoodViewMode.LIST);
    const [foods, setFoods] = useState<Array<Food>>();
    const [dailyDiet, setDailyDiet] = useState<Array<DietDetail>>();
    const [selectedFoodId, setSelectedFoodId] = useState<number>();
    const [foodInputState, dispatchFoodInput] = useReducer(FoodInputReducer, FoodInputInitialState);

    useEffect(() => {
        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet?q=`)
            .then(response => response.data)
            .then(data => {
                setFoods(data)
            })

        getWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet/today`)
            .then(response => response.data)
            .then(data => {
                setDailyDiet(data)
            })
    }, []);

    const getTotalDietDetail = () => {
        const totalCalorie = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.food.calorie
        }, 0);

        const totalCarbo = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.food.carboHydrate
        }, 0);

        const totalProtein = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.food.protein
        }, 0);

        const totalFat = dailyDiet?.reduce((initValue, currValue, currIndex, array) => {
            return initValue + currValue.food.fat
        }, 0);

        return {
            name: 'total',
            calorie: totalCalorie,
            carboHydrate: totalCarbo,
            protein: totalProtein,
            fat: totalFat
        }
    };

    const handleSelectFood = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFoodId(parseInt(e.target.value))
        console.log(selectedFoodId)
    };

    const handleClickAddFood=()=>{
        setViewMode(FoodViewMode.FORM)

    }

    const handleClickAddDiet = () => {
        const today = new Date();
        const data = {
            foodId: selectedFoodId,
            date: getFormatDate(today)
        };

        postWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet/histories`, data)
            .then(response => {
                alert('added diet successfully');
		window.location.reload();
            })
            .catch(e => {
                alert('add diet fail')
                console.log(e)
            })
    };

    const handleClickCreateFood = () => {
        const data = {
            name:foodInputState.name,
            protein:foodInputState.protein,
            calorie:foodInputState.calorie,
            fat:foodInputState.fat,
            carbo_hydrate:foodInputState.carbo_hydrate
        };

        postWithAuth(`${process.env.REACT_APP_API_ENDPOINT}/diet/food`, data)
            .then(response => {
                alert('added diet successfully');
                window.location.reload();
            })
            .catch(e => {
                alert('add diet fail')
                console.log(e)
            })
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        // @ts-ignore
        dispatchFoodInput(action)
    };

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={"diet-detail-container"}>
            <div className={"diet-title"}>
                DIET
            </div>
            <div>
                {
                    viewMode===FoodViewMode.LIST?
                        <DietDetailTable
                            dailyDiet={dailyDiet}
                            totalDietDetail={getTotalDietDetail()}
                            foods={foods}
                            selectedFoodId={selectedFoodId}
                            onSelectFood={handleSelectFood}
                            onClickAddFood={handleClickAddFood}
                            onClickAddDiet={handleClickAddDiet}
                        />:
                        <FoodInput onClickAddFood={handleClickCreateFood}
                                   name={foodInputState.name}
                                   protein={foodInputState.protein}
                                   calorie={foodInputState.calorie}
                                   fat={foodInputState.fat}
                                   carbo_hydrate={foodInputState.carbo_hydrate}
                                   onChangeInput={handleChangeInput}
                        />
                }


            </div>
        </div>

    )
};

export default DietDetailContainer;
