import { Sparkle } from "phosphor-react";
import styles from "./header.module.css";

type HeaderProps = {
    title: string;
};
export function Header({ title }: HeaderProps) {
    return (
        <header className={styles.container}>
            <span>{title}</span>
            <Sparkle />
        </header>
    );
}
