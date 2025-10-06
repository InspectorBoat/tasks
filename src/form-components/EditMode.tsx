import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);

    const editStructure = (
        <div>
            <Form.Control
                type="text"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <Form.Check
                type="checkbox"
                id="student"
                label="Student?"
                checked={student}
                onChange={(e) => {
                    setStudent(e.target.checked);
                }}
            />
        </div>
    );

    return (
        <div>
            {edit ?
                editStructure
            :   <div>
                    {name} is {student ? "" : "not "} a student
                </div>
            }

            <Form.Check
                type="switch"
                value="Edit Mode"
                checked={edit}
                onChange={(e) => {
                    setEdit(e.target.checked);
                }}
            />
        </div>
    );
}
