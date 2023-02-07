import { waitFor } from "@testing-library/react";
import { handleTypeWriter } from "../../src/utils/handleTypeWriter";

describe('handleTypeWriter',  () => {
    it('should correctly add characters to an element', async () => {
      const element = document.createElement('div');
      const text = 'Hello World!';
      handleTypeWriter(element, text);
      await waitFor(( )=>{

          expect(element.innerHTML).toBe(text);
      })
    });
  
    it('should correctly handle line breaks', async () => {
      const element = document.createElement('div');
      const text = 'Hello\nWorld!';
      handleTypeWriter(element, text);
      await waitFor(( )=>{
          expect(element.innerHTML).toBe('Hello<br>World!');
    })
    });
  

  
    it('should return early if element is not provided', () => {
      const text = 'Hello World!';
      handleTypeWriter(null, text);
       // We can't assert the innerHTML property of a non-existent element
        // but we can check if the function returns early without errors
      expect(() => handleTypeWriter(null, text)).not.toThrow();
    });
  });
  