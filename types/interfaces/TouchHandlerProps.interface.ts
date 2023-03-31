import { SlideshowDirection } from "../Slideshow";

export interface TouchHandlerProps {
    setTouchStartX: React.Dispatch<React.SetStateAction<number>>;
    touchStartX: number;
    setTouchMoveX: React.Dispatch<React.SetStateAction<number>>;
    changeModalImage: (direction: SlideshowDirection) => void;
}
