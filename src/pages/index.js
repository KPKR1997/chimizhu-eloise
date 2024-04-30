import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'

export default function Home() {

  const Background = "./images/COVER.jpg";

  return (
    <>
      <Head>
        <title>Chimizhu by Eloise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src = {Background} className = {styles.bgImage}/>
        <div className = {styles.overLay}>
        </div>
        <div className = {styles.Intro}>
          <div className = {styles.introHeadMal}>
              <p>എലോയിസിൻ്റെ</p>
              <h1>ചിമിഴ്</h1>
          </div>
          <div className = {styles.introHeadEng}>
              <h1 className={styles.EngHeading}>Chimizhu</h1>
              <p>by Eloise</p>
          </div>
        </div>
        <div className = {styles.readButtonSec}>
          
          <div className = {styles.readButton}>
          <Link href = "/readpage" className = {styles.pageslink}>
            <h4>START READING</h4>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
