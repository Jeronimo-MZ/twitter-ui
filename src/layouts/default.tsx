import { Sidebar } from "@/components/sidebar";
import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./app.module.css";

export function Default() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
}
