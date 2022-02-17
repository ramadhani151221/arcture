import Head from "next/head";
import styles from "../styles/Home.module.css";

import SideBar from "../components/SideBar";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arcture</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <SideBar />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
