import { SetStateAction } from "react";

export interface ModalImgState {
    src: string;
    id: string;
}

export interface ModalImgContextProps {
    modalImg: ModalImgState;
    setModalImg: (modalImg: ModalImgState) => void;
    parentGalleryId: string;
    setParentGalleryId: React.Dispatch<SetStateAction<string>>;
}
