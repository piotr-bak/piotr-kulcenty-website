import { GalleryGroup } from "../GalleryGroup/GalleryGroup";
import { GalleryItemProps } from "@/types";
type GalleryContainerProps = {
    configData: Array<Array<GalleryItemProps>>;
};

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
