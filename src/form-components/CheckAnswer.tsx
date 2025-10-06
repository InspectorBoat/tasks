import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <Form.Group>
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                />
                <div>{expectedAnswer === answer ? "✔️" : "❌"}</div>
            </Form.Group>
        </div>
    );
}
