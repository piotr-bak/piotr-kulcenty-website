import { SetStateAction } from "react";

export interface SplashScreenContextProps {
    alreadyShowed: boolean;
    setAlreadyShowed: React.Dispatch<SetStateAction<boolean>>;
}
