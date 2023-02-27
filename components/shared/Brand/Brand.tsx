import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import brandImg from "/public/brand.svg";
import styles from "./Brand.module.css";
import filter from "@/styles/themes/filters.module.css";

//Logo musi być wrzucone na stronę galerii (a nie do navbara) - position:sticky
//jeżeli chodzi o viewporty mobilne, powyżej - niech sobie wędruje do góry ekranu
export const Brand = () => {
    const { theme } = useThemeContext();
    return (
        <>
            <Image
                className={`${styles.brandImg} ${filter[theme]}`}
                src={brandImg}
                height={48}
                width={250}
                alt='Piotr Kulcenty Violins'
                priority
            />
        </>
    );
};
