import Image from "next/image";
import spinner from "@/public/spinner-black.svg";
import styles from "@/app/layout.module.css";

export default function Loading() {
    return (
        <div className={styles.center}>
            <Image
                className={styles.spinner}
                src={spinner}
                alt='Loading page...'
                priority
            />
        </div>
    );
}
