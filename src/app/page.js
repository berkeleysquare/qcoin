import Image from "next/image";
import styles from "./page.module.css";
import CoinDisplay from "./coin_display";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <CoinDisplay />
       </main>
    </div>
  );
}
