import { GalleryGroup } from "../GalleryGroup/GalleryGroup";
import { GalleryItemProps } from "@/types";

export const GalleryContainer = (
    configData: Array<Array<GalleryItemProps>>
) => {
    if (!Array.isArray(configData)) {
        console.log(configData);
        console.log(Array.isArray(configData));
        return null; // or some other error handling mechanism
    }
    return (
        <div>
            {configData.map((group) => {
                let uuid = crypto["randomUUID"]();
                return (
                    <div key={uuid}>
                        <GalleryGroup {...group} />;
                    </div>
                );
            })}
        </div>
    );
};
