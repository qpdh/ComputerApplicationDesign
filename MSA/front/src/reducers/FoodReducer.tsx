//운동 추가 reducer

export interface FoodInputState {
    name: string
    calorie: number
    fat: number
    protein:number
    carboHydrate:number
}

enum FoodInputEnum {
    NAME = 'name',
    CALORIE = 'calorie',
    FAT = 'fat',
    PROTEIN='protein',
    CARBOHYDRATE='carboHydrate'
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
    carboHydrate:0,
    fat:0
};