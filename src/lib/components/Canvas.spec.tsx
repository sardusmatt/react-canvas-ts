/**
 * @jest-environment jsdom
 */
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Canvas from './Canvas';

let documentBody: RenderResult;

// no need to test CanvasHook, since the Canvas component uses that under the hood
describe('<Canvas />', () => {
    it('should init a HTMLCanvas element', () => {
        const componentDraw = (ctx: CanvasRenderingContext2D, _frameCount: number, _elapsedTime: number) : void => {
            // first clear the canvas, then draw the new frame
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        };

        documentBody = render(<Canvas  contextType="2d" draw={componentDraw} data-testid="test-canvas" />);
        const canvas = documentBody.getByTestId('test-canvas');
        expect(canvas).toBeInTheDocument();
        expect(canvas).toBeInstanceOf(HTMLCanvasElement);
        expect((canvas as HTMLCanvasElement).getContext("2d")).not.toBeNull();
    });
});