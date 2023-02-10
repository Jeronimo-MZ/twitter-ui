import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import styles from "./home.module.css";

export function Home() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
            </div>
        </div>
    );
}
