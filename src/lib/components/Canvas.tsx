import React, {CSSProperties} from 'react';
import useCanvas from "./CanvasHook";

type Props = {
    contextType: '2d' | 'webgl' | 'webgl2',
    draw: Function,
    width?: number,
    height?: number,
    style?: CSSProperties
};

const Canvas = (props: Props) => {
    // destructure, since some are needed here for the custom hook init and some are to be attached to the HTML element
    const {contextType, draw, ...rest} = props;

    // initialise custom Canvas Hook
    const canvasRef = useCanvas({contextType, draw});

    return (
        <canvas ref={canvasRef} {...rest}></canvas>
    );
};

export default Canvas;
