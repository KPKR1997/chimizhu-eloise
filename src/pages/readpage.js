import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/readPage.module.css";
import Link from 'next/link'
import React from'react'
import {PageFlip} from 'page-flip';


export default function Pages() {

const pagenumber = 1;


  function arrayConstruct(){
    let array = [];
    for (let i=1;i<=100;i++)
      array.push(i);
    return(array);
  }
  const ImageArray = arrayConstruct();
  console.log(ImageArray);


  const pdf = "./Files/CHIMIZHU_MAGAZINE.pdf";
  const page1 = "./images/editorial.jpg"

  
    return (
      <>
      <div className = {styles.main}>
         <object data={pdf} className={styles.object}/>
      </div>
      </>
    )
  }