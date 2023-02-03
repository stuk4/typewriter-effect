import React from 'react'

export const handleTypeWriter = (element:Element | null,text:string,interval:number = 20) => {
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
  }
