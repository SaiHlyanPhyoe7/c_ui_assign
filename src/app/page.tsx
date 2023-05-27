import MainNavbar from "@/components/navbar/main_navbar/MainNavbar";
import styles from "./page.module.scss";
import SubNavbar from "@/components/navbar/sub_navbar/SubNavbar";
import HeroSection from "@/components/body/heroSection/HeroSection";
import AdsSection from "@/components/body/adsSection/AdsSection";
import MovieSection from "@/components/body/movieSection/MovieSection";
import BrandSection from "@/components/body/brandSection/BrandSection";
import QnaSection from "@/components/body/qnaSection/QnaSection";

export default function Home() {
  return (
    <main style={{ height: "5000px" }} className={styles.main}>
      <MainNavbar />
      <SubNavbar />
      <HeroSection />
      <AdsSection />
      <MovieSection />
      <BrandSection />
      <QnaSection />
    </main>
  );
}
