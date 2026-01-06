import { useEffect, useRef, useState } from "react";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";
import CloudTransition from "./components/CloudTransition";

export default function App() {
  const [stage, setStage] = useState(1);
  const ambientRef = useRef(null);

  // 🔊 GLOBAL AMBIENT SOUND (LOOPS FOREVER)
  useEffect(() => {
    const unlockAudio = () => {
      if (!ambientRef.current) {
        const ambient = new Audio("/sounds/ambient.mp3");
        ambient.loop = true;
        ambient.volume = 0.3;
        ambient.play().catch(() => {});
        ambientRef.current = ambient;
      }
      document.removeEventListener("click", unlockAudio);
    };

    document.addEventListener("click", unlockAudio);
  }, []);

  if (stage === 1) {
    return (
      <SlideOne
        onYes={() => setStage(2)}
        onNo={() =>
          alert(
            "You ask me to take risks, yet you backed out from this? Sorry to see you go like this."
          )
        }
      />
    );
  }

  if (stage === 2) {
    return <CloudTransition onFinish={() => setStage(3)} />;
  }

  if (stage === 3) {
    return <SlideTwo onNext={() => setStage(4)} />;
  }

  return <SlideThree />;
}
