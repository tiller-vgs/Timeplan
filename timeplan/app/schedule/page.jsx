"use client"
import React, {useState} from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Class from "@/components/class";


export default function Schedule() {
    const [activeButton, setActiveButton] = useState(null);
  // Definer variabler for størrelse og mellomrom
  const boxWidth = "250px";
  const boxHeight = "550px";
  const boxMargin = "20px";
  const timeColumnWidth = "100px"; // Bredden på tidkolonnen
  const outerContainerWidth = `calc(5 * (${boxWidth} + ${boxMargin}) + 2 * ${boxMargin} + ${timeColumnWidth})`; // Bredden på den ytre beholderen

  // Funksjon for å generere klokkeslett
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let i = 8; i <= 15; i++) {
      timeSlots.push(
        <div key={i} style={{ lineHeight: '50px', color: 'black' }}>
          {i}:00
        </div>
      );
    }
    return timeSlots;
  };

  const pool = require("../../lib/adminaccountmanagement/db.js");

    pool.getConnection((err, connection) => {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query('SELECT * FROM lectureschedule', (error, results, fields) => {
            console.log(results);
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            // Don't use the connection here, it has been returned to the pool.
        });
    });


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div className="flex flex-col items-center gap-y-10 pb-10">
        <h1 className="text-5xl text-white">Timeplan</h1>



        <Button asChild>
          <Link href="/">Hjemmeside</Link>
        </Button>

        <div
          style={{
            border: "2px solid white", // Ytterste border hvit
            padding: "4px",
            borderRadius: "0.375rem", // Avrundede hjørner
            display: "flex",
            justifyContent: "space-between", // Plasserer boksene med jevn avstand
            flexWrap: "wrap", // La boksene gå til neste linje hvis de ikke passer
            gap: boxMargin, // Legg til gap mellom boksene
            backgroundColor: "white", // Bakgrunnsfarge hvit
            flexDirection: "row", // Sørger for at boksene ordnes horisontalt
            width: outerContainerWidth, // Juster bredden basert på boksebredde og mellomrom
          }}
        >
          {/* Tidkolonne */}
          <div
            style={{
              width: timeColumnWidth,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            {generateTimeSlots()}
          </div>

          {/* Bokser */}
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                border: "2px solid indigo", // Mindre border indigo
                padding: "4px",
                borderRadius: "0.375rem", // Avrundede hjørner
                height: boxHeight,
                width: boxWidth,
                backgroundColor: "white", // Bakgrunnsfarge hvit
              }}
            >

                {index === 0 && <Class id={index} activeButton={activeButton} setActiveButton={setActiveButton} />}
                {index === 0 && <Class id={index + 1} activeButton={activeButton} setActiveButton={setActiveButton} />}
                {index === 0 && <Class id={index + 2} activeButton={activeButton} setActiveButton={setActiveButton} />}
                {index === 0 && <Class id={index + 3} activeButton={activeButton} setActiveButton={setActiveButton} />}

                {index === 1 && <Class id={index + 4} activeButton={activeButton} setActiveButton={setActiveButton} />}






            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
