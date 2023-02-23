import Image from "next/image";
import logo from "../public/brand.svg";
import styles from "./Logo.module.css";

//Logo musi być wrzucone na stronę galerii (a nie do navbara) - position:sticky
//jeżeli chodzi o viewporty mobilne, powyżej - niech sobie wędruje do góry ekranu
export const Logo = () => {
    return (
        <>
            <Image
                className={styles.logo}
                src={logo}
                height={48}
                width={250}
                alt='Piotr Kulcenty Violins'
                priority
            />
        </>
    );
};
