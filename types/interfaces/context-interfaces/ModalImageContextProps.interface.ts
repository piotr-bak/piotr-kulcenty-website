import { SetStateAction } from "react";

export interface ModalImgContextProps {
    imgSrc: string;
    setImgSrc: React.Dispatch<SetStateAction<string>>;
}
