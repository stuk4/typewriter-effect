import { useCallback, useEffect } from "react";
import { handleTypeWriter } from "../utils/handleTypeWriter";

interface useTypeWriterProps{
  element:Element | null,
  interval?:number,
  text:string,
  delay?:number,
  inView:boolean,
}
export const useTypeWriter = ({element,interval=20,text,delay=0,inView}:useTypeWriterProps) => {
  
    useEffect(() => {
      if (inView) {
        setTimeout(() =>{
            handleTypeWriter(element, text,interval)
        },delay)
      }
  
  }, [inView])

 
}
