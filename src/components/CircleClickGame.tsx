import { useState } from "react";

type Points = {
  x: number;
  y: number;
};

const CircleClickGame = () => {
  const [points, setPoints] = useState<Points[]>([]);
  const [storedPoints, setStoredPoints] = useState<Points[]>([]);

  /* Add Points Function */
  const handleDot = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPoints((prev) => [...prev, { x: clientX, y: clientY }]);
  };

  /* Undo Functionality */
  const handleUndo = () => {
    if (points.length === 0) return;
    const LastPoint = points[points.length - 1];
    setStoredPoints((prev) => [...prev, LastPoint]);
    setPoints((prev) => prev.slice(0, prev.length - 1));
  };

  /* Redo Functionality */
    const handleRedo = () => {
        if (storedPoints.length === 0) return;
        const LastPoint = storedPoints[storedPoints.length - 1];
        setPoints((prev) => [...prev, LastPoint]);
        setStoredPoints((prev) => prev.slice(0, prev.length - 1));
    };

  return (
    <>
      <div className="bg-gray-800 w-full h-full">
        <button onClick={handleUndo} className="bg-white px-5 m-2">
          Undo
        </button>
        <button onClick={handleRedo} className="bg-white px-5 m-2">
          Redo
        </button>
        <div className="bg-gray-800 h-[100%]" onClick={handleDot}>
          {points.map((point: Points, index: number) => (
            <div
              key={index}
              className="absolute bg-white w-2 h-2 rounded-full"
              style={{ top: point.y, left: point.x }}
            >
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CircleClickGame;
