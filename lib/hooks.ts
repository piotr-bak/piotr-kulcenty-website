import config from "@/components/config/routes.json";
import { GalleryConfigTypes } from "@/types/interfaces";
import { ThemeKey } from "@/types";

export const useTheme = (pathname: string | null) => {
    const entry = config.find(
        (item: GalleryConfigTypes) => item.route === pathname
    );
    return entry ? (entry.theme as ThemeKey) : "dark";
};
