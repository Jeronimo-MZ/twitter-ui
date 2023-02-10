import styles from "./new-tweet-form.module.css";
export function NewTweetForm() {
    return (
        <form className={styles.container}>
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
    );
}
