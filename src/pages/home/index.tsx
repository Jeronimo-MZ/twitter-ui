import { Header } from "@/components/header";
import { Separator } from "@/components/separator";
import { TimelineTweet } from "@/components/timeline-tweet";
import { FormEvent, useState } from "react";
import styles from "./home.module.css";

const initialTweets = [
    `
Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram:

✅ npm start: De 32s para 400ms (sim, demorava 30s)
✅ npm build: De 120s para 22s

Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
`,
    `Estamos vivendo um momento interessante no mercado de startups. 

Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first. 

Tudo começa com um projeto open source/free 👀`,
];

export function Home() {
    const [newTweet, setNewTweet] = useState("");
    const [tweets, setTweets] = useState(initialTweets);
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setTweets((prev) => [newTweet, ...prev]);
        setNewTweet("");
    };

    return (
        <>
            <Header title="Home" />
            <main>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="tweet">
                        <img
                            src="https://github.com/jeronimo-mz.png"
                            alt="Jerónimo Matavel"
                        />
                        <textarea
                            name="tweet"
                            id="tweet"
                            placeholder="What's Happening?"
                            value={newTweet}
                            onChange={(e) => setNewTweet(e.target.value)}
                        />
                    </label>
                    <button type="submit">Tweet</button>
                </form>
                <Separator />
                {tweets.map((tweet, index) => (
                    <TimelineTweet key={`tweet_${index}`} text={tweet} />
                ))}
            </main>
        </>
    );
}
