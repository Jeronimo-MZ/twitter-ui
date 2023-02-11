import { Header } from "@/components/header";
import { Separator } from "@/components/separator";
import { TimelineTweet } from "@/components/timeline-tweet";
import styles from "./home.module.css";

const tweets = [
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
    return (
        <>
            <Header title="Home" />
            <main>
                <form className={styles.form}>
                    <label htmlFor="tweet">
                        <img
                            src="https://github.com/jeronimo-mz.png"
                            alt="Jerónimo Matavel"
                        />
                        <textarea
                            name="tweet"
                            id="tweet"
                            placeholder="What's Happening?"
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
