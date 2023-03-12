# React Canvas TS
A React TypeScript custom hook and canvas-wrapping component providing an interface to render 2D/3D scenes on HTML Canvas.

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
