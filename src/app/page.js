

import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Sidebar/>
        <Footer/>
    </main>
  );
}
