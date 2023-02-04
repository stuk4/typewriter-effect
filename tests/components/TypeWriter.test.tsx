import React from "react";
import { render, cleanup, waitFor } from '@testing-library/react';

import { TypeWriter } from '../../src/components/TypeWriter';
import { handleTypeWriter } from "../../src/utils/handleTypeWriter";
/**
 * @jest-environment jsdom
 */

jest.mock('../../src/utils/handleTypeWriter');


describe('TypeWriter component', () => {
  afterEach(cleanup);

  it('renders the correct element type', () => {
    const { getByTestId } = render(
      <TypeWriter elementType="h1" text="Test text" />
    );
    const element = getByTestId('typewriter-element');
    expect(element.tagName).toBe('H1');
  });

  it('calls handleTypeWriter with correct parameters', async () => {
    const text = 'Test text';
    const interval = 20;
    const delay = 0;
    const { getByTestId } = render(
      <TypeWriter elementType="h1" text={text} interval={interval} delay={delay} />
    );
    const element = getByTestId('typewriter-element')
    // waiting delay 
    await waitFor(() => {expect(handleTypeWriter).toHaveBeenCalledWith(element, text, interval)})
  });

  it('has the correct class name', () => {
    const className = 'test-class';
    const { getByTestId } = render(
      <TypeWriter elementType="h1" text="Test text" classNames={className} />
    );
    const element = getByTestId('typewriter-element');
    expect(element.classList.contains(className)).toBe(true);
  });
});
