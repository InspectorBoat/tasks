import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [questionType, changeQuestionType] = useState<QuestionType>(
        "short_answer_question",
    );
    return (
        <div>
            <Button
                onClick={() => {
                    changeQuestionType(
                        questionType == "short_answer_question" ?
                            "multiple_choice_question"
                        :   "short_answer_question",
                    );
                }}
            >
                Change Type
            </Button>
            {questionType === "short_answer_question" ?
                "Short Answer"
            :   "Multiple Choice"}
        </div>
    );
}
