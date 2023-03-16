"use client"; /*use client used here related to Next.js Issue #41940 - https://github.com/vercel/next.js/issues/41940 */
import {
    HamburgerMenuContextProvider,
    ModalImgContextProvider,
    SplashScreenContextProvider,
    ThemeContextProvider,
} from "@/contexts";
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
                    content='Piotr Kulcenty is a Violin Maker and Restorer based in London, UK, creating widely acclaimed master violins.'
                />
            </head>
            <body className={`${styles.body}`}>
                <ThemeContextProvider>
                    <SplashScreenContextProvider>
                        <ModalImgContextProvider>
                            <HamburgerMenuContextProvider>
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
                            </HamburgerMenuContextProvider>
                        </ModalImgContextProvider>
                    </SplashScreenContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
