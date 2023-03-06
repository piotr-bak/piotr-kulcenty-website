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
            {configData.map((group, index) => {
                let uuid = uuidv4();

                //below checks whether the group is either 1st or 2nd of its kind
                //- images from the first and second group need to have "priority"
                //  attribute set to true - otherwise Next.js img optimization
                //  causes some of visible images to load a bit *too* lazy
                let priorityGroup = index < 2;
                return (
                    <GalleryGroup
                        key={uuid}
                        items={group}
                        mode={mode}
                        priorityGroup={priorityGroup}
                    />
                );
            })}
        </div>
    );
};
