import { Sparkle } from "phosphor-react";
import styles from "./header.module.css";
export function Header() {
    return (
        <header className={styles.container}>
            <span>Home</span>
            <Sparkle />
        </header>
    );
}
