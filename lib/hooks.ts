import config from "@/config/route-config.json";
import { GalleryConfigTypes } from "@/types/interfaces";
import { ThemeKey } from "@/types";

export const useTheme = (pathname: string | null) => {
    const entry = config.find(
        (item: GalleryConfigTypes) => item.route === pathname
    );
    return entry ? (entry.theme as ThemeKey) : "dark";
};
