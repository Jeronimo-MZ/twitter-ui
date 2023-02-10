import styles from "./sidebar.module.css";
import twitterLogo from "@/assets/twitter-logo.svg";
import {
    House,
    Hash,
    Bell,
    EnvelopeSimple,
    BookmarkSimple,
    FileText,
    User,
    DotsThreeCircle,
} from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={twitterLogo} alt="Twitter Logo" className={styles.logo} />
            <nav className={styles.menu}>
                <a href="#" className={styles.active}>
                    <House weight="fill" /> Home
                </a>
                <a href="#">
                    <Hash /> Explore
                </a>
                <a href="#">
                    <Bell /> Notifications
                </a>
                <a href="#">
                    <EnvelopeSimple /> Messages
                </a>
                <a href="#">
                    <BookmarkSimple /> Bookmarks
                </a>
                <a href="#">
                    <FileText /> Lists
                </a>
                <a href="#">
                    <User /> Profile
                </a>
                <a href="#">
                    <DotsThreeCircle /> More
                </a>
            </nav>
            <button type="button" className={styles.newTweet}>
                Tweet
            </button>
        </aside>
    );
}
