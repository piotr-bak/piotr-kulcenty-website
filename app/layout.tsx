"use client";
import { ModalImgContextProvider, ThemeContextProvider } from "@/contexts";
import { Navbar } from "@/components/Navigation/Navbar/Navbar";
import { Brand } from "@/components/shared/Brand/Brand";
import { Footer } from "@/components/Navigation/Footer/Footer";
import { Modal } from "@/components/Gallery/Modal/Modal";
import { Wrapper } from "@/components/shared/Wrapper/Wrapper";
import "@/styles/global.css";
import styles from "./layout.module.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
            </head>
            <body className={`${styles.body}`}>
                <ThemeContextProvider>
                    <ModalImgContextProvider>
                        <Wrapper>
                            <header>
                                <Navbar />
                            </header>
                            <main className={`${styles.layout}`}>
                                <Brand />
                                {children}
                            </main>
                            <footer>
                                <Footer />
                            </footer>
                            <Modal />
                        </Wrapper>
                    </ModalImgContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
