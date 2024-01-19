import { useState, useEffect } from "react";
import { generateHexColor } from '../utils/HelperFunctions'

const ColorGenerator = () => {
  const [actualColor, setActualColor] = useState("");
  const [colors, setColors] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined);

  

  const handleButtonClick = (code: string) => {
    if (code === actualColor) {
      setResult(true);
      setTimeout(() => {
        const newColor = generateHexColor();
        setActualColor(newColor);
        setResult(undefined);
        setColors(
          [newColor, generateHexColor(), generateHexColor()].sort(
            () => Math.random() - 0.5
          )
        );
      }, 1000);
    } else {
      setResult(false);
      setTimeout(()=> {
        setResult(undefined)
      },1000)
    }
  };

  useEffect(() => {
    const correctAnswer = generateHexColor();
    setActualColor(correctAnswer);
    setColors(
      [correctAnswer, generateHexColor(), generateHexColor()].sort(
        () => Math.random() - 0.5
      )
    );
    console.log("UseEffect running");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div
        className="w-[350px] h-[200px]"
        style={{ backgroundColor: actualColor }}
      >
        
      </div>
      <div className="flex gap-5 mt-2">
        {colors.map((color, index) => (
          <button
            onClick={() => handleButtonClick(color)}
            className="bg-gray-200 px-4 py-3"
            key={index}
          >
            {color}
          </button>
        ))}
      </div>
      {result !== undefined && (
        <div className="mt-5">
          {result ? (
            <p className="text-green-500">Correct!</p>
          ) : (
            <p className="text-red-500">Wrong!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ColorGenerator;
