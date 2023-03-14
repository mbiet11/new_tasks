import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [D1, setD1] = useState<number>(3);
    const [D2, setD2] = useState<number>(5);

    return (
        <div>
            <span data-testid="left-die">{D1}</span>
            <span data-testid="left-die">{D2}</span>
            <Button onClick={() => setD1(d6)}> Roll Left</Button>
            <Button onClick={() => setD2(d6)}> Roll Right</Button>
            {D1 === 1 && D2 === 1 ? <span> lose</span> : <span> Win</span>}
        </div>
    );
}
