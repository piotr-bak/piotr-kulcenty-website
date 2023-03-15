import { v4 as uuidv4 } from "uuid";
import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryItem } from "../GalleryItem/GalleryItem";
import { sliceIntoGroups } from "@/lib/helpers";
import styles from "./GalleryContainer.module.css";

export const GalleryContainer = ({
    configData,
    mode,
}: GalleryContainerProps) => {
    const groups = sliceIntoGroups(configData, mode);
    let groupCount: number = 0;
    return (
        <div>
            {groups.map((group) => {
                ++groupCount;
                let groupId = uuidv4();
                return (
                    <div key={groupId} className={`${styles[mode]}`}>
                        {group.map((item) => {
                            let itemId = uuidv4();
                            return (
                                <GalleryItem
                                    key={itemId}
                                    {...item}
                                    mode={mode}
                                    priority={groupCount === 1 ? true : false}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
