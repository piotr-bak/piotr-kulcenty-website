import { CarouselDirection } from "../Carousel";

export interface TouchHandlerProps {
    setTouchStartX: React.Dispatch<React.SetStateAction<number>>;
    touchStartX: number;
    setTouchMoveX: React.Dispatch<React.SetStateAction<number>>;
    changeModalImage: (direction: CarouselDirection) => void;
}
