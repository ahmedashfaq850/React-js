function TrunCateTitle(text:string, maxLength:number) {
    if (text.length <= maxLength) {
      return text;
    }
  
    // Extract the substring up to the specified maxLength
    const truncatedText = text.substring(0, maxLength);
  
    // Append an ellipsis
    return truncatedText + '...';
  }

  export default TrunCateTitle