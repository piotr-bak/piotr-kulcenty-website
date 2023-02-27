import config from "@/config/route-themes.json";

export const useTheme = (pathname: string | null) => {
    //quick config sanitization
    const bindings = JSON.parse(JSON.stringify(config));
    const isDark: boolean = bindings.darkTheme.includes(pathname);

    return isDark ? "dark" : "light";
};
