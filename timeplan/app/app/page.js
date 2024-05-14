"use client"
import { useState } from 'react';
import Image from "next/image";
import { Button } from "@nextui-org/button";
import img1 from '../Bilder/img(1).jpeg';
import img2 from "../Bilder/img(2).jpeg";
import img3 from "../Bilder/img(3).jpeg";
import styles from "./globals.module.css";

function ImageButton({ imageSrc, buttonPosition, imagePosition }) {
  const[showImage, setShowImage] = useState(false);
  
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className={styles.imageButtonContainer}>
      <div className={styles.imageWrapper} style={imagePosition}>
        {showImage && (
          <Image
            src={imageSrc}
            width={250}
            height={150}
            alt="Image"
          />
        )}
          </div>  
          <Button className={styles.button} color="primary" onClick={toggleImage} style={buttonPosition}>
          {showImage ? '  Lukk bilde' : 'Se rom'}
        </Button>
      </div>
  );
}

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.imageButtonsWrapper}>
      <ImageButton imageSrc={img1} buttonPosition={{ left: "100px", top: "20px" }} imagePosition={{ left: "50px", top: "50px" }} />
      <ImageButton imageSrc={img2} buttonPosition={{ left: "500px", top: "20px" }} imagePosition={{ left: "450px", top: "50px" }} />
      <ImageButton imageSrc={img3} buttonPosition={{ left: "900px", top: "20px" }} imagePosition={{ left: "850px", top: "50px" }} />
      </div>
    </main>
  );  
}