import { ClientContexts } from "@/components/Core/ClientContexts/ClientContexts";
import { Navbar } from "@/components/Navigation/Navbar/Navbar";
import { Brand } from "@/components/UI/shared/Brand/Brand";
import { Footer } from "@/components/Navigation/Footer/Footer";
import { Modal } from "@/components/Gallery/Modal/Modal";
import { Wrapper } from "@/components/UI/Layout/Wrapper/Wrapper";
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
                <link rel='canonical' href='https://piotrkulcenty.com' />
                <meta
                    name='description'
                    content='Piotr Kulcenty is a Violin Maker and Restorer based in London, UK, creating widely acclaimed master violins.'
                />
            </head>
            <body className={`${styles.body}`}>
                <ClientContexts>
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
                </ClientContexts>
            </body>
        </html>
    );
}
