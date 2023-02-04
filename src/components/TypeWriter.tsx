import {createElement, useEffect, useRef} from 'react'
import {handleTypeWriter} from '../utils/handleTypeWriter';
interface TypeWriterProps {
    text: string;
    elementType: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'li' | 'a',
    delay?: number,
    classNames?: string,
    interval?: number
}
export const TypeWriter = ({
    elementType: Element,
    text,
    delay = 0,
    interval = 20,
    classNames
} : TypeWriterProps) => {
    const refElement = useRef <HTMLElement | null > (null)
    useEffect(() => {
        const timeout = setTimeout(() => {
            handleTypeWriter(refElement.current, text, interval)
        }, delay)
        return() => {
            clearTimeout(timeout)
        }
    }, [])
    return createElement(Element, {ref: refElement,className:`${classNames}`,"data-testid":"typewriter-element"})
}
