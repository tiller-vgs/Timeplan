"use client"
import { useState } from 'react';
import Image from "next/image";
import { Button } from "@nextui-org/button";
import styles from "@/app/app/globals.module.css";

function ImageButton({ id, activeButton, setActiveButton, imageSrc, buttonPosition, imagePosition }) {
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
                        width={250}
                        height={150}
                        alt="Image"
                    />
                )}
            </div>
            <Button className={styles.button} color="primary" onClick={toggleImage} style={buttonPosition}>
                {activeButton === id ? '  Lukk bilde' : 'Se rom'}
            </Button>
        </div>
    );
}

export default ImageButton;