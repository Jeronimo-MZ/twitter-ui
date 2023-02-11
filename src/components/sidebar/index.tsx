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
    Pencil,
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
                            <span>Home</span>
                        </>
                    )}
                </NavLink>
                <NavLink to="#">
                    <Hash /> <span>Explore</span>
                </NavLink>
                <NavLink to="#">
                    <Bell /> <span>Notifications</span>
                </NavLink>
                <NavLink to="#">
                    <EnvelopeSimple /> <span>Messages</span>
                </NavLink>
                <NavLink to="#">
                    <BookmarkSimple /> <span>Bookmarks</span>
                </NavLink>
                <NavLink to="#">
                    <FileText /> <span>Lists</span>
                </NavLink>
                <NavLink to="#">
                    <User /> <span>Profile</span>
                </NavLink>
                <NavLink to="#">
                    <DotsThreeCircle /> <span>More</span>
                </NavLink>
            </nav>
            <button type="button" className={styles.newTweet}>
                <Pencil size={"2.4rem"} />
                <span>Tweet</span>
            </button>
        </aside>
    );
}
