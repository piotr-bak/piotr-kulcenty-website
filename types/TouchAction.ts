export type TouchAction =
    | { type: "start"; value: number }
    | { type: "end"; value: number };

export const initialTouchState = {
    start: 0,
    end: 0,
};
