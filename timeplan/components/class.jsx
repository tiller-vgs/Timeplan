"use client"
import React, {useState} from 'react';
import img1 from '@/app/Bilder/img(1).jpeg';
import img2 from "@/app/Bilder/img(1).jpeg";
import img3 from "@/app/Bilder/img(1).jpeg";
import jon from "@/app/Bilder/teachers/jon.jpg";
import knut from "@/app/Bilder/teachers/knut.jpg";
import roar from "@/app/Bilder/teachers/roar.jpg";
import ImageButton from "@/components/imageButton";

const Class = ({ id, activeButton, setActiveButton }) => {

    return (
        <div className=" bg-red-900 border-solid border-2">
            <div className="text-sm flex">
                <p className="pl-2">⏰: 8:00 - 9:30</p>


            </div>
            <h1 className="text-xl pl-2 pt-2 pb-2 font-bold">Utvikling</h1>
            <ImageButton id={id + "-1"} activeButton={activeButton} setActiveButton={setActiveButton} imageSrc={img1} buttonPosition={{ left: "155px", top: "-60px" }} imagePosition={{ left: "150px", top: "-150px" }} text="🏫: 2065" />
            <ImageButton id={id + "-2"} activeButton={activeButton} setActiveButton={setActiveButton} imageSrc={jon} buttonPosition={{ left: "7px", top: "-20px" }} imagePosition={{ left: "-120px", top: "-90px" }} text="🧑‍🏫: Jon" />
            <p className="pl-2 text-sm"></p>

        </div>
    );
};

export default Class;
