import { TypeWriterInView } from './components/TypeWriterInView'

export const Example = () => {
  return (
    <TypeWriterInView 
        elementType='p'
        text={`Hello world. \n\n This is a test`}
     />
  )
}
