import { Container } from "@/components/Layout/Container/Container";
import { SplashScreen } from "@/components/SplashScreen/SplashScreen";
import { HomeSlider } from "@/components/Home/HomeSlider";

export const metadata = {
    title: "Piotr Kulcenty Violins",
    themeColor: "#000000",
};

export default function Page() {
    return (
        <Container>
            <SplashScreen />
            <HomeSlider />
        </Container>
    );
}
