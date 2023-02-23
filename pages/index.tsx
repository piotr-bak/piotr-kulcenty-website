import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "@/styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Piotr Kulcenty Violins</title>
                <meta
                    name='description'
                    content='Piotr Kulcenty - London-based Violin Maker and Restorer'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>
                <Navbar />
                <div>Piotr Kulcenty</div>
            </main>
        </>
    );
}
