import React from "react";
import { render, waitFor } from '@testing-library/react';
import { TypeWriter } from '../../src/components/TypeWriter';
import { handleTypeWriter } from "../../src/utils/handleTypeWriter";
/**
 * @jest-environment jsdom
*/

const ReactTestRenderer = require('react-test-renderer');

jest.mock('../../src/utils/handleTypeWriter');


describe('TypeWriter component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct element type', () => {
    const tag = "h1"
    const { getByTestId, } = render(
      <TypeWriter elementType={tag} text="Test text" />
    );
    const element = getByTestId('typewriter-element');
    expect(element.tagName.toLowerCase()).toBe(tag);
  });


  it('calls handleTypeWriter with correct parameters', async () => {
    const text = 'Test text';
    const interval = 20;
    const delay = 0;
    const { getByTestId } = render(
      <TypeWriter elementType="h1" text={text} interval={interval} delay={delay} />
    );
    // waiting delay 
    const element = getByTestId('typewriter-element')
    await waitFor(() => {
      expect(handleTypeWriter).toHaveBeenCalledWith(element, text, interval)
    })

  });



  it('has the correct class name', () => {
    const className = 'test-class';
    const { getByTestId } = render(
      <TypeWriter elementType="h1" text="Test text" classNames={className} />
    );
    const element = getByTestId('typewriter-element');
    expect(element.classList.contains(className)).toBe(true);
   
  });

  
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<TypeWriter elementType="h1" text="Test text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
