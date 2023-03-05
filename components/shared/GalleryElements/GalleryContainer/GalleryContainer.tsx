import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryGroup } from "../GalleryGroup/GalleryGroup";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = (
    { configData }: GalleryContainerProps,
    mode: string
) => {
    return (
        <div className={styles.container}>
            {configData.map((group) => {
                let uuid = crypto["randomUUID"]();
                return <GalleryGroup key={uuid} items={group} mode={mode} />;
            })}
        </div>
    );
};
