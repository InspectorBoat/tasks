import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);
    return (
        <div>
            <Form.Group>
                <Form.Label>Multiple Choice</Form.Label>
                <Form.Select
                    onChange={(e) => {
                        setSelectedAnswer(e.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{selectedAnswer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
