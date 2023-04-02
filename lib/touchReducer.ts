import { TouchAction, initialTouchState } from "@/types";

export const touchReducer = (
    state: typeof initialTouchState,
    action: TouchAction
) => {
    switch (action.type) {
        case "start":
            return { ...state, start: action.value };
        case "end":
            return { ...state, end: action.value };
        default:
            return state;
    }
};
