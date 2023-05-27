import MainNavbar from "@/components/navbar/main_navbar/MainNavbar";
import styles from "./page.module.scss";
import SubNavbar from "@/components/navbar/sub_navbar/SubNavbar";

export default function Home() {
  return (
    <main style={{ height: "5000px" }} className={styles.main}>
      <MainNavbar />
      <SubNavbar />
      
    </main>
  );
}
