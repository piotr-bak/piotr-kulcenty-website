import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryGroup } from "../GalleryGroup/GalleryGroup";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({ configData }: GalleryContainerProps) => {
    return (
        <div className={styles.container}>
            {configData.map((group) => {
                let uuid = crypto["randomUUID"]();
                return (
                    <div key={uuid}>
                        <GalleryGroup items={group} />
                    </div>
                );
            })}
        </div>
    );
};
