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
import { NavLink } from "react-router-dom";

const handleActiveClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : undefined;
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={twitterLogo} alt="Twitter Logo" className={styles.logo} />
            <nav className={styles.menu}>
                <NavLink to="/" className={handleActiveClassName}>
                    {({ isActive }) => (
                        <>
                            <House weight={isActive ? `fill` : undefined} />
                            Home
                        </>
                    )}
                </NavLink>
                <NavLink to="#">
                    <Hash /> Explore
                </NavLink>
                <NavLink to="#">
                    <Bell /> Notifications
                </NavLink>
                <NavLink to="#">
                    <EnvelopeSimple /> Messages
                </NavLink>
                <NavLink to="#">
                    <BookmarkSimple /> Bookmarks
                </NavLink>
                <NavLink to="#">
                    <FileText /> Lists
                </NavLink>
                <NavLink to="#">
                    <User /> Profile
                </NavLink>
                <NavLink to="#">
                    <DotsThreeCircle /> More
                </NavLink>
            </nav>
            <button type="button" className={styles.newTweet}>
                Tweet
            </button>
        </aside>
    );
}
