import React from "react";
import { render, screen, waitFor } from '@testing-library/react';

import {mockAllIsIntersecting} from 'react-intersection-observer/test-utils';
import { TypeWriterInView } from '../../src/components/TypeWriterInView';


const ReactTestRenderer = require('react-test-renderer');



describe('TypeWriter component', () => {
    const tag = "h1"
    const text = "Test text"

    it('should write the input text when is visible in viewport' , async() =>{
        
        render(
          <TypeWriterInView elementType={tag} text={text} />
        );
        mockAllIsIntersecting(true);
        const element = screen.getByTestId('typewriter-element');
        await waitFor(() =>{
          expect(element).toHaveTextContent(text)
        })
    })
    it('should not write the input text when is visible in viewport' , async() =>{
        
        render(
          <TypeWriterInView elementType={tag} text={text} />
        );
        mockAllIsIntersecting(false);
        const element = screen.getByTestId('typewriter-element');
        await waitFor(() =>{
          expect(element).toHaveTextContent("")
        })
    })

    it('renders the correct element type', () => {
        
        const {getByTestId} = render 
        (<TypeWriterInView 
            elementType={tag}
            text={text} />
            );
        const element = getByTestId('typewriter-element');
        expect(element.tagName.toLowerCase()).toBe(tag);
    });


    it('has the correct class name', () => {
        const className = 'test-class';
        const {getByTestId} = render (<TypeWriterInView elementType="h1" text="Test text"
            classNames={className}/>);
        const element = getByTestId('typewriter-element');
        expect(element.classList.contains(className)).toBe(true);

    });


    it('matches the snapshot', () => {
        const tree = ReactTestRenderer.create (<TypeWriterInView elementType="h1" text="Test text"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
