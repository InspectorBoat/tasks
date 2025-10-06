import React, { useState } from "react";
import { Form } from "react-bootstrap";
const colors = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [currentColor, setCurrentColor] = useState<string>("aliceblue");

    return (
        <div>
            <Form.Group>
                <Form.Label>Change Color</Form.Label>
                {colors.map((color) => (
                    <Form.Check
                        type="radio"
                        name="colors"
                        inline
                        key={color}
                        label={color}
                        value={color}
                        onChange={() => (setCurrentColor(color), void 0)}
                    />
                ))}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: currentColor }}
                >
                    The color is {currentColor}
                </div>
            </Form.Group>
        </div>
    );
}
