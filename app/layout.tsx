import { ClientContexts } from "@/components/Core/ClientContexts/ClientContexts";
import { Navbar } from "@/components/Navigation/Navbar/Navbar";
import { Brand } from "@/components/Layout/shared/Brand/Brand";
import { Footer } from "@/components/Navigation/Footer/Footer";
import { Modal } from "@/components/Gallery/Modal/Modal";
import { Wrapper } from "@/components/Layout/Wrapper/Wrapper";
import Script from "next/script";
import schema from "@/config/schema.json";
import "@/styles/global.css";
import styles from "./layout.module.css";

export const metadata = {
    description:
        "Piotr Kulcenty is a Violin Maker and Restorer based in London, UK, creating widely acclaimed master violins.",
    icons: {
        icon: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${styles.body}`}>
                <Script
                    id='schema'
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
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
