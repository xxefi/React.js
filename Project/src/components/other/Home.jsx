import { Box, Button } from "@chakra-ui/react";
import HomeFooter from "../footers/HomeFooter";
import TitleComponent from "../title-component/TitleComponent";
import WoltBackground from "../../../src/assets/wolt-background.jpg";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${WoltBackground})`,
        backgroundColor: "#cbe1ad",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "67%",
      }}
      className="flex flex-col items-center justify-center h-full relative w-full"
    >
      <TitleComponent Button={Button} Box={Box} />
      <div className="w-full flex-auto m-auto">
        <HomeFooter />
      </div>
    </div>
  );
}
