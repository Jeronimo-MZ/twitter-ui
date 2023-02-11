import styles from "./tweet.module.css";
import { ChatCircle, Heart, ArrowsClockwise } from "phosphor-react";
export function Tweet() {
    return (
        <article className={styles.container}>
            <img
                src="https://github.com/jeronimo-mz.png"
                alt="Jerónimo Matavel"
                className={styles.avatar}
            />

            <div className={styles.tweetContent}>
                <header>
                    <strong>Jerónimo Matavel</strong>
                    <span>@jeronimo-mz</span>
                </header>
                <a href="#">
                    Acabei de migrar um projeto React GIGANTE de
                    create-react-app para Vite e os resultados foram:
                    <br />
                    <br />
                    ✅ npm start: De 32s para 400ms (sim, demorava 30s)
                    <br />
                    ✅ npm build: De 120s para 22s
                    <br />
                    <br />
                    Além disso, troquei do Yarn para o PNPM e o install das deps
                    mudou de 24s para 8s 🔥
                </a>
                <footer>
                    <button>
                        <ChatCircle /> 32
                    </button>
                    <button>
                        <ArrowsClockwise /> 32
                    </button>
                    <button>
                        <Heart /> 32
                    </button>
                </footer>
            </div>
        </article>
    );
}
