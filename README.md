# React Canvas TS
A React TypeScript custom hook and canvas-wrapping component providing an interface to render 2D/3D scenes on HTML Canvas.

## Installation
In your project folder, if you use _npm_ run
```shell
npm install react-canvas-ts
```
or if you use _yarn_
```shell
yarn add react-canvas-ts
```

In your code, you can now use either the Canvas Component, or the Canvas Hook directly (if you already have your own component including a HTML Canvas element).

## Usage (Canvas Component)
```js
import React from 'react';
import Canvas from 'react-canvas-ts';

const draw = (ctx, frameCount, elapsedTime) => {
    // ...
}

const App = () => {
    return (
        <Canvas contextType="2d" draw={draw} />
    );
};

export default App;
```

## Usage (Canvas Hook)
```js
import React from 'react';
import useCanvas from 'react-canvas-ts';

const draw = (ctx, frameCount, elapsedTime) => {
    // ...
}
const contextType = '2d';

const App = () => {

  const canvasRef = useCanvas({draw, contextType});

  return (
        // note how we are returning the HTML canvas, not the React Canvas component
        <canvas ref={canvasRef} />
    );
};

export default App;
```

## Props
Currently-supported props are: 
- `contextType`: can be one of these three values
  - `2d` -> the component will reference the underlying 2D Context to draw on the Canvas element
  - `webgl2` -> the component will reference the underlying 3D WebGL 2 (OpenGL 3.0 support) Context to render on the Canvas element
  - `webgl` -> the component will reference the underlying 3D WebGL (OpenGL 2.0 support) Context to render on the Canvas element
- `draw`: drawing/rendering logic callback, having parameters:
  - `context` -> the Canvas context to render on (2D or 3D, depending on which `contentType` was specified)
  - `frameCount` -> current frame number since the render loop was initialised
  - `elapsedTime` -> amount of time passed since last draw call, in ms

## TypeScript
The hook and component have been developed entirely in TypeScript 4.x.

## How to run the example app
```shell
git clone https://github.com/sardusmatt/react-canvas-ts.git && cd react-canvas-ts/example
yarn
yarn start
```
The example page will be available at http://localhost:3000.
