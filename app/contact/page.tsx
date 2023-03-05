"use client";
import { Container } from "@/components/shared/Container/Container";
import { cormorant } from "@/lib/fonts";
import style from "./style.module.css";

export default function Page() {
    return (
        <Container>
            <div className={`${style.wrap} ${cormorant.className}`}>
                <div className={style.content}>
                    <section className={style.description}>
                        <p>
                            Piotr is an instrument maker and restorer based in
                            London, UK.
                        </p>
                        <p>
                            Feel free to get in touch for any projects,
                            collaborations or enquires.
                        </p>
                    </section>
                    <section className={`${style.linkarea}`}>
                        <div>
                            <a href='mailto:piotr.kulcenty@gmail.com'>email</a>
                        </div>
                        <a
                            href='https://www.linkedin.com/in/piotr-kulcenty-a5106825b/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            linkedin
                        </a>
                        <a
                            href='https://www.instagram.com/qulcenty_p/'
                            target='blank'
                            rel='noopener noreferrer'>
                            instagram
                        </a>
                    </section>
                </div>
            </div>
        </Container>
    );
}
