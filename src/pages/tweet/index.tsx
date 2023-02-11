import { Header } from "@/components/header";
import { Separator } from "@/components/separator";
import { TimelineTweet } from "@/components/timeline-tweet";
import { FormEvent, useState } from "react";
import styles from "./tweet.module.css";

const tweet = `
Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:

✅ npm start: De 32s para 400ms (sim, demorava 30s)
✅ npm build: De 120s para 22s

Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
`;

const initialAnswers = [
    "Concordo...",
    "Olha, faz sentido!",
    "Parabens pelo progresso!!!",
];

export function Tweet() {
    const [newAnswer, setNewAnswer] = useState("");
    const [answers, setAnswers] = useState(initialAnswers);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setAnswers((prev) => [newAnswer, ...prev]);
        setNewAnswer("");
    };
    return (
        <>
            <Header title="Tweet" />
            <TimelineTweet text={tweet} />
            <Separator />
            <form onSubmit={handleSubmit} className={styles.answerForm}>
                <label htmlFor="answer">
                    <img
                        src="https://github.com/jeronimo-mz.png"
                        alt="Jerónimo Matavel"
                    />
                    <textarea
                        name="answer"
                        id="answer"
                        placeholder="Tweet your answer"
                        value={newAnswer}
                        onChange={(e) => setNewAnswer(e.target.value)}
                    />
                </label>
                <button type="submit">Tweet</button>
            </form>
            <main className={styles.answers}>
                {answers.map((answer) => (
                    <TimelineTweet key={answer} text={answer} />
                ))}
            </main>
        </>
    );
}
