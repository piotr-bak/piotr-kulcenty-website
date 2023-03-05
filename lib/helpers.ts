import { ConfigFile } from "@/types";

export const parseConfig = (configFile: ConfigFile) => {
    configFile = JSON.parse(JSON.stringify(configFile));
    for (const fragment of configFile) {
        if (Array.isArray(fragment)) {
            fragment.forEach((element) => {
                if (element.width) {
                    element.width = +element.width;
                }
                if (element.height) {
                    element.height = +element.height;
                }
            });
        }
    }
    return configFile;
};

export const getImageOrientation = (height: number, width: number) => {
    if (height > width) {
        return "portrait";
    } else {
        return "landscape";
    }
};
