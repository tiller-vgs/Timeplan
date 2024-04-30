"use client"
import { useState } from 'react';
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import img1 from '../Bilder/img1.jpeg';
import globals from "./globals.css";


export default function Home() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <main>
      <div className="imageContainer">
        {showImage && (
          <Image
            src={img1}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        )}
      </div>
      <Button color="primary" onClick={toggleImage}>
        {showImage ? 'Hide Image' : 'Show Image'}
      </Button>
    </main>
  );
}