import React from "react";

export default function TitleComponent({ Button }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col flex-grow items-center justify-center text-center">
          <h1 className="text-6xl font-bold mb-2">Title</h1>
          <p className="text-2xl mb-4">Subtitle</p>
        </div>
        <div className="flex space-x-2">
          <Button backgroundColor="white" colorScheme="gray">
            Button
          </Button>
          <Button backgroundColor="black" colorScheme="white" marginLeft="10px">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}
