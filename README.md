<div align="center">
  <img alt="Logo" src="https://github.com/stuk4/typewriter-effect/blob/main/static/500x500.png" width="200" />
</div>
<div align="center">
  <img alt="Logo" src="https://github.com/stuk4/typewriter-effect/blob/main/static/gif_hero.gif" width="200" />
</div>

# Typewriter Effect

This project is an implementation of a typewriter effect using React and TypeScript.

## Usage
### `TypeWriter` component
To use the `<TypeWriter> `component, you need pass it the following props:

| Name                   | Type                      | Default     | Description                                                                                                                                                                                                                                                                                     |
| ---------------------- | ------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **elementType**               | `string`                 | `required`  | Is the element to render (if you want a more types of elements only edit its interface  ).  |
| **text**         | `string`                  | `required`     | A string to apply the effect..
| **interval**           | `number (optional)` | `20` | The interval between character writed                                                                                                                                               |
| **classNames**  | `string (optional)`                 | `""`     |  ClassName to add to the Element created                                                                                                                                                                                      |
| **delay**           | `number (optional)`                  | `0` | A number indicating the  delay in milliseconds to start to write |


Example:
```tsx
import { TypeWriter } from './components/TypeWriter'

export const Example = () => {
  return (
    <TypeWriter 
        elementType='p'
        text={`Hello world, \n\n This is a test`}
     />
  )
}

```
### `TypeWriterInView` component
To use the `<TypeWriterInView> `component, the principal diference between the normal is that it uses the library [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for show  the element when is in the viewport . You need pass it the following props:

| Name                   | Type                      | Default     | Description                                                                                                                                                                                                                                                                                     |
| ---------------------- | ------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **elementType**               | `string`                 | `required`  | Is the element to render (if you want a more types of elements only edit its interface  ).  |
| **text**         | `string`                  | `required`     | A string to apply the effect..
| **interval**           | `number (optional)` | `20` | The interval between character writed                                                                                                                                               |
| **classNames**  | `string (optional)`                 | `""`     |  ClassName to add to the Element created                                                                                                                                                                                      |
| **delay**           | `number (optional)`                  | `0` | A number indicating the  delay in milliseconds to start to write |


Example:
```tsx
import { TypeWriterInView } from './components/TypeWriterInView'

export const Example = () => {
  return (
    <TypeWriterInView 
        elementType='p'
        text={`Hello world, \n\n This is a test`}
     />
  )
}
```
if you want use  `TypeWriterInView` into array I recommend remove this part and create another component and recive the porp InView.
```tsx
const [ref, inView,node] = useInView({
      rootMargin: '-100px 0px',
      triggerOnce: true
    })
```
## Built With
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds optional static typing
- [Vite](https://github.com/vitejs/vite) - A development server that allows for instant development and hot-module replacement

## Dependencies
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) - A React component for the Intersection Observer API

## Scripts
- `yarn dev`: Runs the development server with hot-module replacement
- `yarn build`: Compiles the project with TypeScript and creates a production-ready build in the dist folder
- `yarn preview`: Runs the development server and opens the app in the browser
- `yarn test`: Runs the test suite
- `yarn test:watch`: Runs the test suite in watch mode

## Dev Dependencies
- `@types/jest`: TypeScript definitions for Jest
- `@types/react`: TypeScript definitions for React
- `@types/react-dom`: TypeScript definitions for React-DOM
- `@types/react-test-renderer`: TypeScript definitions for React-Test-Renderer
- `@vitejs/plugin-react`: A Vite plugin for React
- `jest`: A JavaScript testing framework
- `jest-environment-jsdom`: Jest environment using JSDOM
- `react-test-renderer`: A package for testing React components
- `ts-jest`: A TypeScript preprocessor for Jest
- `typescript`: A superset of JavaScript that adds optional static typing
- `vite`: A fast and productive front-end development build tool

## Getting Started
Environment:
```
node v16.17.0
yarn 1.22.19
npm 8.15.0
```
To run this project locally, clone the repository and install the dependencies:

```bash
git clone  <repo-link>
cd typewriter-effect
yarn install
```
Then, start the development server:
```bash
yarn dev
```
