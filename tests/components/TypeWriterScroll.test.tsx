import React from "react";
import { render } from '@testing-library/react';
import {TypeWriterInScroll} from '../../src/components/TypeWriterInView';
import {setupIntersectionMocking, resetIntersectionMocking} from 'react-intersection-observer/test-utils';

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
