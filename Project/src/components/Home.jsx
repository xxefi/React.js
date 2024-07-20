import { Box, Button } from "@chakra-ui/react";
import HomeFooter from "./footers/HomeFooter";
import TitleComponent from "./title-component/TitleComponent";
export default function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{
        backgroundImage: `
        linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3),
        linear-gradient(45deg, #f3f3f3 25%, transparent 25%, transparent 75%, #f3f3f3 75%, #f3f3f3)
      `,
        backgroundSize: "195px 195px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      <TitleComponent Button={Button} Box={Box} />
      <div className="w-full flex-auto m-auto">
        <HomeFooter />
      </div>
    </div>
  );
}
