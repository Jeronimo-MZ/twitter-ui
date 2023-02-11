import { Header } from "@/components/header";
import { NewTweetForm } from "@/components/new-tweet-form";
import { Separator } from "@/components/separator";
import { Sidebar } from "@/components/sidebar";
import { Tweet } from "@/components/tweet";
import styles from "./home.module.css";

export function Home() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
                <main className={styles.timeline}>
                    <NewTweetForm />
                    <Separator />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </main>
            </div>
        </div>
    );
}
