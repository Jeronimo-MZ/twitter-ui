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
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={twitterLogo} alt="Twitter Logo" className={styles.logo} />
            <nav className={styles.menu}>
                <Link to="/" className={styles.active}>
                    <House weight="fill" /> Home
                </Link>
                <Link to="#">
                    <Hash /> Explore
                </Link>
                <Link to="#">
                    <Bell /> Notifications
                </Link>
                <Link to="#">
                    <EnvelopeSimple /> Messages
                </Link>
                <Link to="#">
                    <BookmarkSimple /> Bookmarks
                </Link>
                <Link to="#">
                    <FileText /> Lists
                </Link>
                <Link to="#">
                    <User /> Profile
                </Link>
                <Link to="#">
                    <DotsThreeCircle /> More
                </Link>
            </nav>
            <button type="button" className={styles.newTweet}>
                Tweet
            </button>
        </aside>
    );
}
