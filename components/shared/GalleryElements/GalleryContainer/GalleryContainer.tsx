import { v4 as uuidv4 } from "uuid";
import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryGroup } from "../GalleryGroup/GalleryGroup";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({
    configData,
    mode,
}: GalleryContainerProps) => {
    return (
        <div className={styles.container}>
            {configData.map((group) => {
                let uuid = uuidv4();
                return <GalleryGroup key={uuid} items={group} mode={mode} />;
            })}
        </div>
    );
};
