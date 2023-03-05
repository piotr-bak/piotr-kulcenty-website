"use client";
import Image from "next/image";
import { Container } from "@/components/shared/Container/Container";
import { cormorant } from "@/lib/fonts";
import photo from "@/public/portrait.webp";
import style from "./style.module.css";

export default function Page() {
    return (
        <Container>
            <div className={`${style.wrap} ${cormorant.className}`}>
                <div className={`${style.content}`}>
                    <div className={style.columnL}>
                        <Image
                            className={style.image}
                            src={photo}
                            alt="Piotr Kulcenty's portrait"
                        />
                    </div>
                    <div className={style.columnR}>
                        <p>
                            Piotr Kulcenty is a violin maker and restorer
                            currently based in London, UK.
                        </p>

                        <p>
                            Piotr started making violins at the age of 14 in
                            Poznań, Poland. He trained under the Krupa family,
                            making instruments in the Italian tradition of the
                            Cremonese masters.
                        </p>

                        <p>
                            In 2014, he achieved a Master&#39;s degree in Violin
                            Making from the Academy of Music in Poznań,
                            presenting a new violin and a thesis on Andrea
                            Amati.
                        </p>

                        <p>
                            Since 2012, Piotr has worked as a violin maker and
                            restorer in renowned workshops in Italy, Switzerland
                            and the United Kingdom. He currently holds a
                            position as restorer and workshop manager at
                            Stringers in London.
                        </p>

                        <p>
                            During the course of his career Piotr built over 30
                            instruments, mostly violins, and has set up and
                            repaired hundreds of violins, violas and cellos.
                        </p>

                        <p>
                            In his spare time, Piotr works on long-term, big
                            restoration projects and on making new violins,
                            exploring different styles and varnishing
                            techniques.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}
