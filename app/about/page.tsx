import { GalleryMode } from "@/types";
import Image from "next/image";
import { Container } from "@/components/UI/Layout/Container/Container";
import { GalleryContainer } from "@/components/Gallery/GalleryContainer/GalleryContainer";
import { Footnote } from "@/components/UI/shared/Footnote/Footnote";
import { parseGalleryData } from "@/lib/helpers";
import dataFile from "@/public/gallery/data/about.json";
import { cormorant } from "@/lib/fonts";
import photo from "@/public/piotr-kulcenty.webp";
import style from "./style.module.css";
import { getBlurDataURL } from "@/lib/helpers";
import { ParsedGalleryData } from "@/types/interfaces";

export default function Page() {
    const galleryData: ParsedGalleryData = parseGalleryData(dataFile);
    const mode: GalleryMode = "mixed";
    const galleryID = galleryData.id;
    const PORTRAIT_THUMB =
        "14 08 0A 05 00 AF 8A 97 77 68 66 67 75 76 87 77 F0 87 00 7F 08";
    return (
        <Container>
            <div className={`${style.wrap} ${cormorant.className}`}>
                <section className={`${style.content}`}>
                    <figure className={style.columnL}>
                        <Image
                            className={style.image}
                            src={photo}
                            priority
                            placeholder='blur'
                            blurDataURL={getBlurDataURL(PORTRAIT_THUMB)}
                            alt="Piotr Kulcenty's portrait"
                        />
                    </figure>
                    <article className={style.columnR}>
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
                    </article>
                </section>
            </div>
            <div className={style.gallery}>
                <GalleryContainer
                    galleryData={galleryData}
                    mode={mode}
                    galleryID={galleryID}
                />
            </div>
            <Footnote />
        </Container>
    );
}
