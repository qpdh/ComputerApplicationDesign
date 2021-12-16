import React, {ChangeEvent, SyntheticEvent} from 'react';
import {Button, Input, Table} from "reactstrap";
import {DietDetail, Food, TotalDietDetail} from "../../../../type";
import './index.scss'
import internal from "stream";

interface Props {
    onClickAddFood: () => void
    name:string
    protein:number
    calorie:number
    fat:number
    carboHydrate:number
    onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void

}

const FoodInput = (props: Props) => {
    return (
        <div className={"diet-detail"}>
            <div className={"add-exercise-input-group"}>
                <Input
                    name={"name"}
                    className={"add-exercise-input"}
                    placeholder={"name"}
                    value={props.name}
                    onChange={props.onChangeInput}
                />
                <Input
                    name={"calorie"}
                    className={"add-exercise-input"}
                    placeholder={"calorie"}
                    // value={props.calorie}
                    onChange={props.onChangeInput}
                />
                <Input
                    name={"fat"}
                    className={"add-exercise-input"}
                    placeholder={"fat"}
                    // value={props.fat}
                    onChange={props.onChangeInput}
                />
                <Input
                    name={"protein"}
                    className={"add-exercise-input"}
                    placeholder={"protein"}
                    // value={props.protein}
                    onChange={props.onChangeInput}
                />
                <Input
                    name={"carboHydrate"}
                    className={"add-exercise-input"}
                    placeholder={"carboHydrate"}
                    // value={props.carbo_hydrate}
                    onChange={props.onChangeInput}
                />
            </div>
            <div className={"add-custom-food-button-container"}>
                <Button
                    onClick={props.onClickAddFood}
                    className={"add-custom-food-button"}
                    color={"success"}
                >
                    Add Food
                </Button>
            </div>
        </div>
    )
};

export default FoodInput;