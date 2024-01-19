export const generateHexColor = () => {
    const colorsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * colorsArr.length);
      hexColor += colorsArr[randomIndex];
    }
    return hexColor;
  };