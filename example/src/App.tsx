import React, {CSSProperties} from 'react';
import {Canvas, useCanvas} from 'react-canvas-typescript';

const componentDraw = (ctx: CanvasRenderingContext2D, frameCount: number, elapsedTime: number) : void => {
  // first clear the canvas, then draw the new frame
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.beginPath();
  ctx.ellipse(20 + Math.cos(frameCount*-0.2), 40, 10, 10 ** Math.cos(frameCount*0.2), 5, 4 * Math.cos(frameCount*0.2), 313 - 20 * Math.cos(elapsedTime*0.2));
  ctx.fill();
  ctx.fillStyle = `green`;
  ctx.ellipse(50 + Math.cos(frameCount*-0.2), 40, 10, 10 ** Math.cos(frameCount*0.2), -5, 4 * Math.cos(frameCount*0.2), 313 - 20 * Math.cos(frameCount*0.2));
  ctx.fill();
};

const useCanvasDraw = (ctx: CanvasRenderingContext2D, frameCount: number, elapsedTime: number) : void => {
  // first clear the canvas, then draw the new frame
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.beginPath();
  ctx.ellipse(20 + Math.cos(frameCount*-0.2), 40, 10, 10 ** Math.cos(frameCount*0.2), 5, 4 * Math.cos(frameCount*0.2), 313 - 20 * Math.cos(frameCount*0.2));
  ctx.fill();
  ctx.fillStyle = `red`;
  ctx.ellipse(50 + Math.cos(frameCount*-0.2), 40, 10, elapsedTime ** Math.cos(frameCount*0.2), -5, 4 * Math.cos(frameCount*0.2), 313 - 20 * Math.cos(frameCount*0.2));
  ctx.fill();
};

const contextType = '2d';

const componentStyle: CSSProperties = {
  width: '900px',
  height: '400px'
};

const App = () => {

  const canvasRef = useCanvas({contextType, draw: useCanvasDraw});

  return (
      <>
        <div>
          <h1>Canvas Component</h1>
          <Canvas contextType={contextType} draw={componentDraw} width={450} height={200} style={componentStyle}/>
        </div>
        <div>
          <h1>Custom Canvas Hook</h1>
          <canvas ref={canvasRef}/>
        </div>
      </>
  );
};

export default App;
