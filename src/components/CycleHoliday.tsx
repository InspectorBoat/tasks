import React, { useState } from "react";
import { Button } from "react-bootstrap";

const emojisLexicographically: Emoji[] = ["🥀", "🥺", "💀", "💔", "😈"];
const emojisChronologically: Emoji[] = ["🥺", "💔", "🥀", "😈", "💀"];
type Emoji = "🥺" | "💔" | "🥀" | "😈" | "💀";
export function CycleHoliday(): React.JSX.Element {
    const [activeEmoji, setActiveEmoji] = useState<Emoji>("💀");
    const nextAlphabet = () => {
        setActiveEmoji(
            emojisLexicographically[
                (emojisLexicographically.indexOf(activeEmoji) + 1) %
                    emojisLexicographically.length
            ],
        );
    };
    const nextDate = () => {
        setActiveEmoji(
            emojisChronologically[
                (emojisChronologically.indexOf(activeEmoji) + 1) %
                    emojisChronologically.length
            ],
        );
    };
    return (
        <div>
            Holiday: {activeEmoji}
            <Button onClick={nextAlphabet}>Alphabet</Button>
            <Button onClick={nextDate}>Year</Button>
        </div>
    );
}
