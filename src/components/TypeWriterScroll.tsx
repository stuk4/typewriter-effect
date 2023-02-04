import React, { createElement } from 'react'
import { useInView } from 'react-intersection-observer'
import { useTypeWriter } from '../hooks/useTypeWriterInView'
import { ITypeWriterProps } from '../interfaces/ITypeWriter'

export const TypeWriterInScroll = ({
  elementType: Element,
  text,
  delay = 0,
  interval = 20,
  classNames

}:ITypeWriterProps) => {
  const [ref, inView,node] = useInView({
      rootMargin: '-100px 0px',
      triggerOnce: true

    })
  useTypeWriter({
      element:node?.target as Element,
      text:text,
      inView:inView,
      delay:delay,
      interval

    })
  return  createElement(Element, {ref: ref,className:`${classNames ? classNames : ""}`,"data-testid":"typewriter-element"})
}
