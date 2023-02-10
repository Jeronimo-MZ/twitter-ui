import { Header } from "@/components/header";
import { NewTweetForm } from "@/components/new-tweet-form";
import { Sidebar } from "@/components/sidebar";
import styles from "./home.module.css";

export function Home() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
                <main className={styles.timeline}>
                    <NewTweetForm />
                </main>
            </div>
        </div>
    );
}
