import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [gain, setGain] = useState<string>("");
    return (
        <div>
            <Form.Group>
                <Form.Label>Give Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={(e) => {
                        setGain(e.target.value);
                    }}
                />
                <Button
                    name="gain"
                    onClick={() => {
                        const gainInt = parseInt(gain);
                        setAttempts(
                            attempts +
                                (isNaN(gainInt) || (gainInt | 0) !== gainInt ?
                                    0
                                :   gainInt),
                        );
                    }}
                >
                    Gain attempts
                </Button>
                <Button
                    name="use"
                    disabled={attempts <= 0}
                    onClick={() => {
                        setAttempts(Math.max(0, attempts - 1));
                    }}
                >
                    Use attempt
                </Button>
                <p>Attempts left: {attempts}</p>
            </Form.Group>
        </div>
    );
}
