import Link from "next/link";
import {Button} from "@/components/ui/button"
export default function Schedule() {
  // Definer variabler for størrelse og mellomrom
  const boxWidth = "250px";
  const boxHeight = "550px";
  const boxMargin = "20px";
  const outerContainerWidth = `calc(5 * (${boxWidth} + ${boxMargin}) + 2 * ${boxMargin})`; // Bredden på den ytre beholderen

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-white from-slate-900 to-slate-800">
      <div className="flex flex-col items-center gap-y-10">
        <h1 className="text-8xl">Timeplan</h1>

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
          {/* Første boks */}
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
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
}

