export interface ExerciseCreateInputState {
    name: string
}

enum ExerciseCreateInputEnum {
    Name = 'name'
}

export interface ExerciseCreateInputAction {
    type: ExerciseCreateInputEnum
    value: string | number
}

export const exerciseCreateInputReducer = (state: ExerciseCreateInputState, action: ExerciseCreateInputAction) => {
    return {
        ...state,
        [action.type] : action.value
    }
};

export const exerciseCreateInputInitialState: ExerciseCreateInputState = {
    name:""
};