"use client"
import React, {useState} from 'react';
import img1 from '@/app/Bilder/img(1).jpeg';
import img2 from "@/app/Bilder/img(1).jpeg";
import img3 from "@/app/Bilder/img(1).jpeg";
import ImageButton from "@/components/imageButton";




const Class = ({ id, activeButton, setActiveButton }) => {

    return (
        <div className=" bg-red-900 border-solid border-2">
            <div className="text-sm flex">
                <p className="pl-2">⏰: 8:00 - 9:30</p>
                <p className="pl-12">🏫: 2065</p>

            </div>
            <h1 className="text-xl pl-2 pt-2 pb-2 font-bold">Utvikling</h1>
            <ImageButton id={id} activeButton={activeButton} setActiveButton={setActiveButton} imageSrc={img1} buttonPosition={{ left: "155px", top: "-30px" }} imagePosition={{ left: "50px", top: "-230px" }} />

            <p className="pl-2 text-sm">🧑‍🏫: Jon</p>

        </div>
    );
};

export default Class;
