import { Header } from "@/components/header";
import { NewTweetForm } from "@/components/new-tweet-form";
import { Separator } from "@/components/separator";
import { Sidebar } from "@/components/sidebar";
import { TimelineTweet } from "@/components/timeline-tweet";
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
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                    <TimelineTweet />
                </main>
            </div>
        </div>
    );
}
