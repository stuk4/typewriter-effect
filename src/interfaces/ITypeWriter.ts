

export interface ITypeWriterProps {
    text: string;
    elementType: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'li' | 'a',
    delay?: number,
    classNames?: string,
    interval?: number
}