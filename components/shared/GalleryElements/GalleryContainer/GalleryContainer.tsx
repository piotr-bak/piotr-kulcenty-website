import { GalleryContainerProps } from "@/types/interfaces";
import { GalleryGroup } from "../GalleryGroup/GalleryGroup";

export const GalleryContainer = ({ configData }: GalleryContainerProps) => {
    return (
        <div>
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
