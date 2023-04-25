export type TouchAction =
    | { type: "start"; value: number }
    | { type: "move"; value: number }
    | { type: "end"; value: number }
    | { type: "reset" };

export const initialTouchState = {
    start: 0,
    end: 0,
};
