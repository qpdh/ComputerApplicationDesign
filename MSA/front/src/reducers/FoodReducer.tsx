export interface FoodInputState {
    name: string
    calorie: number
    fat: number
    protein:number
    carbo_hydrate:number
}

enum FoodInputEnum {
    NAME = 'name',
    CALORIE = 'calorie',
    FAT = 'fat',
    PROTEIN='protein',
    CARBO_HYDRATE='carbo_hydrate'
}

export interface FoodInputAction {
    type: FoodInputEnum
    value: string | number
}

export const FoodInputReducer = (state: FoodInputState, action: FoodInputAction) => {
    return {
        ...state,
        [action.type] : action.value
    }
};

export const FoodInputInitialState: FoodInputState = {
    name: "",
    protein: 0,
    calorie: 0,
    carbo_hydrate:0,
    fat:0
};