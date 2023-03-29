import { SetStateAction } from "react";

export interface ModalImgContextProps {
    modalImgSrc: string;
    setModalImgSrc: React.Dispatch<SetStateAction<string>>;
    modalImgId: string;
    setModalImgId: React.Dispatch<SetStateAction<string>>;
    parentGalleryId: string;
    setParentGalleryId: React.Dispatch<SetStateAction<string>>;
}
