import { useCallback, useEffect } from "react";
import { handleTypeWriter } from "../utils/handleTypeWriter";

interface useTypeWriterProps{
  element:Element | null,
  interval?:number,
  text:string,
  delay?:number
}
export const useTypeWriter = ({element,interval=20,text,delay=0}:useTypeWriterProps) => {
  
  const handleTypeWriter = useCallback(() => {
    console.log("salto",element)
    if (!element) return;
      let charIndex = 0;
      const handleAddChar = ( ) => {
        element.classList.add('typewriter');
        element.innerHTML += text[charIndex] === "\n" ? "<br>" : text[charIndex];
        charIndex++;
        if (charIndex < text.length) {
          setTimeout(handleAddChar, interval);
        }
      }
      handleAddChar();
  },[element])

  useEffect(() => {
    const timeout = setTimeout(() =>{
        handleTypeWriter()
    },delay)
    return ( ) =>{
      clearTimeout(timeout)
    }
  }, [element])
 
}
