import React from "react";
import {  renderHook, waitFor} from '@testing-library/react';

import {useTypeWriter} from "../../src/hooks/useTypeWriterInView";
import {handleTypeWriter} from "../../src/utils/handleTypeWriter";

/**
 * @jest-environment jsdom
*/


jest.mock('../../src/utils/handleTypeWriter');


describe('TypeWriter component', () => {

    afterEach(() => {
        jest.clearAllMocks();
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

});
