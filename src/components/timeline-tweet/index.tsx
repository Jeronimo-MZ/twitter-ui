import styles from "./timeline-tweet.module.css";
import { ChatCircle, Heart, ArrowsClockwise } from "phosphor-react";
import { Link } from "react-router-dom";

type TimelineTweetProps = {
    text: string;
};
export function TimelineTweet({ text }: TimelineTweetProps) {
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
                <Link to="/tweet">{text}</Link>
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
