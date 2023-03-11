import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import brandImg from "/public/brand.svg";
import styles from "./Brand.module.css";
import filter from "@/styles/themes/filters.module.css";

//Logo musi być wrzucone na stronę galerii (a nie do navbara) - position:sticky
//jeżeli chodzi o viewporty mobilne, powyżej - niech sobie wędruje do góry ekranu
export const Brand = () => {
    const { theme } = useThemeContext();
    return (
        <h1>
            <Link href='/'>
                <figure className={`${styles.wrap}`}>
                    <Image
                        className={`${filter[theme]} ${styles.logo}`}
                        src={brandImg}
                        height={48}
                        width={250}
                        alt='Piotr Kulcenty Violins'
                        priority
                    />
                </figure>
            </Link>
        </h1>
    );
};
