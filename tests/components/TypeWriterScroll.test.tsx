import React from "react";
import {act, render, renderHook, waitFor} from '@testing-library/react';
import {TypeWriter} from '../../src/components/TypeWriter';

import {TypeWriterInScroll} from '../../src/components/TypeWriterScroll';
import {setupIntersectionMocking, resetIntersectionMocking} from 'react-intersection-observer/test-utils';
import {useTypeWriter} from "../../src/hooks/useTypeWriter";
import {handleTypeWriter} from "../../src/utils/handleTypeWriter";

/**
 * @jest-environment jsdom
*/

const ReactTestRenderer = require('react-test-renderer');


jest.mock('../../src/utils/handleTypeWriter');


describe('TypeWriter component', () => {

    beforeEach(() => {
        setupIntersectionMocking(jest.fn);
    });

    afterEach(() => {
        jest.clearAllMocks();
        resetIntersectionMocking();
    });

    it('renders the correct element type', () => {
        const tag = "h1"
        const {getByTestId} = render (<TypeWriterInScroll elementType={tag}
            text="Test text"/>);
        const element = getByTestId('typewriter-element');
        expect(element.tagName.toLowerCase()).toBe(tag);
    });

    it('should call handleTypeWriter when inView is true', async () => {
        const text = 'Hello, World!'
        const interval = 50;
        renderHook(() => useTypeWriter({
            element: document.createElement('div'),
            text:text ,
            inView: true,
            delay: 100,
            interval: interval
        }));

        await waitFor(() => {
            expect(handleTypeWriter).toHaveBeenCalledWith(document.createElement('div'), text, interval);
        })
    });

    it('should not call handleTypeWriter when inView is false', async () => {
        const text = 'Hello, World!'
        const interval = 50;
        renderHook(() => useTypeWriter({
            element: document.createElement('div'),
            text:text ,
            inView: false,
            delay: 100,
            interval: interval
        }));

        await waitFor(() => {
            expect(handleTypeWriter).not.toHaveBeenCalledWith();
        })
    });
    it('has the correct class name', () => {
        const className = 'test-class';
        const {getByTestId} = render (<TypeWriterInScroll elementType="h1" text="Test text"
            classNames={className}/>);
        const element = getByTestId('typewriter-element');
        expect(element.classList.contains(className)).toBe(true);

    });


    it('matches the snapshot', () => {
        const tree = ReactTestRenderer.create (<TypeWriterInScroll elementType="h1" text="Test text"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
