import {createElement, useEffect, useRef} from 'react'
import { ITypeWriterProps } from '../interfaces/ITypeWriter';
import {handleTypeWriter} from '../utils/handleTypeWriter';

export const TypeWriter = ({
    elementType: Element,
    text,
    delay = 0,
    interval = 20,
    classNames
} : ITypeWriterProps) => {
    const refElement = useRef <HTMLElement | null > (null)
    useEffect(() => {
        const timeout = setTimeout(() => {
            handleTypeWriter(refElement.current, text, interval)
        }, delay)
        return() => {
            clearTimeout(timeout)
        }
    }, [])
    return createElement(Element, {ref: refElement,className:`${classNames ? classNames : ""}`,"data-testid":"typewriter-element"})
}
