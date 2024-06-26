"use client"
import { useState } from 'react';
import Image from "next/image";
import { Button } from "@nextui-org/button";
import styles from "@/app/globals.module.css";

function ImageButton({ id, activeButton, setActiveButton, imageSrc, buttonPosition, imagePosition, text }) {
    const[showImage, setShowImage] = useState(false);

    const toggleImage = () => {
        if (activeButton === id) {
            setActiveButton(null);
        } else {
            setActiveButton(id);
        }

    };

    return (
        <div className={styles.imageButtonContainer}>
            <div className={styles.imageWrapper} style={imagePosition}>
                {activeButton === id && (
                    <Image
                        src={imageSrc}
                        width={100}
                        height={200}
                        alt="Image"
                    />
                )}
            </div>
            <Button className={styles.button} color="primary" onClick={toggleImage} style={buttonPosition}>
                {text}
            </Button>
        </div>
    );
}

export default ImageButton;