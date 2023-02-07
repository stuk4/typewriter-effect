import React from "react";
import {render, screen, waitFor} from '@testing-library/react';
import {TypeWriter} from '../../src/components/TypeWriter';

const ReactTestRenderer = require('react-test-renderer');

describe('TypeWriter component', () => {

    const tag = "h1"
    const text = "Test text"
    it('renders the correct element type', () => {
        render (<TypeWriter elementType={tag}
            text={text}/>);
        const element = screen.getByTestId('typewriter-element');
        expect(element.tagName.toLowerCase()).toBe(tag);
    });
    it('should write the input text', async () => {
        render (<TypeWriter elementType={tag}
            text={text}/>);
        const element = screen.getByTestId('typewriter-element');
        await waitFor(() => {
            expect(element.textContent).toEqual(text)
        })
    })
    it('should have the correct className typewriter', async () => {
        render (<TypeWriter elementType={tag}
            text={text}/>);
        const element = screen.getByTestId('typewriter-element');
        await waitFor(() => {
            expect(element.classList.contains("typewriter")).toEqual(true)
        })
    })


    it('has the correct class name', () => {
        const className = 'test-class';
        const {getByTestId} = render (<TypeWriter elementType="h1" text="Test text"
            classNames={className}/>);
        const element = getByTestId('typewriter-element');
        expect(element.classList.contains(className)).toBe(true);

    });


    it('matches the snapshot', async () => {
        const tree = ReactTestRenderer.create (<TypeWriter elementType="h1" text="Test text"/>).toJSON();
        expect(tree).toMatchSnapshot();

    });
});
