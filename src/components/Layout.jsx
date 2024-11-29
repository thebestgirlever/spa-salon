
import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles.container}>
            <header className={styles.hd}>
                <div className={styles.menu}>
                    <svg width="40" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="#fff" fill-opacity="0" d="M0 0h40v48H0z" /></clipPath></defs><g clip-path="url(#a)" fill="#FFF"><path d="M38.33 25.95H1.66c-.92 0-1.66-.89-1.66-2 0-1.1.74-2 1.66-2h36.67c.92 0 1.67.9 1.67 2 0 1.11-.75 2-1.67 2ZM38.33 10.62H1.66c-.92 0-1.66-.9-1.66-2s.74-2 1.66-2h36.67c.92 0 1.67.9 1.67 2s-.75 2-1.67 2ZM38.33 41.29H1.66c-.92 0-1.66-.9-1.66-2 0-1.11.74-2 1.66-2h36.67c.92 0 1.67.89 1.67 2 0 1.1-.75 2-1.67 2Z" /></g></svg>
                    <div className={styles.mTitle}>МЕНЮ</div>
                </div>
                <svg className={styles.basket} width="40" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="#fff" fill-opacity="0" d="M0 0h40v48H0z" /></clipPath></defs><g clip-path="url(#a)"><path d="m29.69 6 2.5 10.5h2.98L32.34 42H7.65L4.82 16.5H7.8L10.3 6h19.39Zm2.63 13.5H7.67L9.84 39h20.31l2.17-19.5ZM15 25.5v6h-2.5v-6H15Zm6.25 0v6h-2.5v-6h2.5Zm6.25 0v6H25v-6h2.5ZM27.8 9H12.19l-1.79 7.5h19.19L27.8 9Z" fill="#FFF" /></g></svg>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className={styles.ftr}>
                <svg width="40" height="39.96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.72 11.8c-3.3-.76-6.81-1.05-11.15-.78.01-.2.03-.39.03-.58C27.6 4.66 22.93 0 17.24 0A10.43 10.43 0 0 0 6.79 10.44c0 .61.12 1.32.31 2.08a27.41 27.41 0 0 1-5.07-.72c-.51-.08-1.02 0-1.44.35-.34.25-.59.76-.59 1.27v24.03c0 .77.51 1.44 1.27 1.62 6.17 1.76 15.37.42 18.94 0 6.11-.68 11.97-1.37 17.75 0 .98.25 2.04-.49 2.04-1.62V13.42c0-.77-.51-1.45-1.28-1.62ZM17.23 3.31c3.91 0 7.05 3.23 7.05 7.13 0 2.81-3.9 9.77-7.05 14.7-3.14-4.93-7.05-11.97-7.05-14.7 0-3.9 3.15-7.13 7.05-7.13Zm19.46 32.1c-5.69-1.01-11.3-.34-16.82.35-5.69.67-11.12 1.36-16.48.34V15.54c1.56.23 3.19.39 4.95.41 2.41 5.53 6.86 12.11 7.54 13.08.71 1.07 2.06.94 2.71 0 .75-1.06 5.95-8.86 8.1-14.63 3.94-.31 7.09-.22 10 .36v20.65Z" fill="#000"/></svg>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="#fff" fill-opacity="0" d="M0 0h40v40H0z"/></clipPath></defs><g clip-path="url(#a)" fill="#000"><path d="M29.59 22.98c-.07-.04-2.99-1.47-3.51-1.66-.21-.08-.44-.15-.68-.15-.39 0-.72.2-.98.58-.29.43-1.17 1.47-1.45 1.77-.03.04-.08.09-.11.09s-.48-.18-.61-.24c-3.13-1.36-5.51-4.63-5.83-5.18-.05-.08-.05-.12-.05-.12.01-.04.12-.14.17-.2.16-.15.33-.36.5-.56.08-.1.16-.19.23-.28.24-.28.35-.5.48-.75l.06-.14c.31-.6.05-1.11-.04-1.28-.07-.13-1.3-3.1-1.43-3.42-.31-.75-.73-1.1-1.31-1.1-.05 0 0 0-.22.01-.28.01-1.77.21-2.43.62-.7.44-1.88 1.85-1.88 4.32 0 2.22 1.41 4.33 2.02 5.12.01.02.04.06.08.12 2.32 3.39 5.22 5.91 8.15 7.08 2.82 1.13 4.16 1.26 4.92 1.26.32 0 .58-.03.8-.05l.14-.01c.98-.09 3.12-1.2 3.61-2.56.39-1.06.49-2.23.23-2.65-.17-.29-.48-.44-.86-.62Z"/><path d="M20.35 0C9.52 0 .7 8.74.7 19.49c0 3.48.93 6.89 2.7 9.86L.02 39.31c-.06.18-.01.39.12.53.1.1.24.16.37.16.06 0 .11-.01.16-.03l10.38-3.3a19.75 19.75 0 0 0 9.3 2.32c10.83 0 19.65-8.75 19.65-19.5S31.18 0 20.35 0Zm0 34.93c-3.06 0-6.02-.88-8.56-2.55a.521.521 0 0 0-.29-.09c-.05 0-.1.01-.16.03l-5.19 1.65 1.67-4.95c.06-.16.03-.34-.07-.48a15.199 15.199 0 0 1-2.96-9.05c0-8.51 6.98-15.43 15.56-15.43s15.56 6.92 15.56 15.43c0 8.52-6.98 15.44-15.56 15.44Z"/></g></svg>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="#fff" fill-opacity="0" d="M0 0h40v40H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M32.2 37.88c-.32 0-.63-.09-.89-.27l-10.06-6.82-5.39 3.88c-.43.31-.97.38-1.46.21-.49-.18-.87-.59-1-1.09l-2.71-10.27-9.68-3.7C.4 19.59 0 19.01 0 18.36c-.01-.66.39-1.24.99-1.49l36.8-14.64c.17-.07.35-.11.52-.12a.67.67 0 0 1 .2 0c.36.02.73.17 1.01.45.03.03.06.06.08.09.24.26.37.59.39.92.01.09.01.17 0 .26-.01.06-.01.12-.03.18L33.75 36.6c-.1.52-.45.96-.95 1.16-.19.08-.4.12-.6.12ZM22.13 27.56l8.96 6.08 4.83-25.36-17.45 16.8 3.62 2.45c.02.01.03.02.04.03Zm-7.46-1.35 1.2 4.55 2.59-1.86-3.39-2.3a1.85 1.85 0 0 1-.4-.39Zm-8.74-7.89 6.65 2.54c.48.18.84.58.97 1.07l.84 3.2c.04-.37.2-.72.48-.98L31.5 8.14 5.93 18.32Z" fill="#000"/></g></svg>
                <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a"><path fill="#fff" fill-opacity="0" d="M0 0h40v40H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M28.74 40c-1.29 0-2.57-.23-3.82-.69-5.52-2-10.64-5.26-14.81-9.43A40.688 40.688 0 0 1 .68 15.07c-.65-1.77-.84-3.6-.57-5.44.26-1.72.92-3.39 1.93-4.83 1.01-1.44 2.36-2.64 3.9-3.47C7.59.44 9.38 0 11.28 0c.59 0 1.1.41 1.22.98l1.96 9.16c.09.41-.04.84-.34 1.14l-3.35 3.36c3.16 6.28 8.3 11.42 14.58 14.58l3.36-3.35c.3-.3.73-.43 1.14-.34l9.16 1.96c.57.12.98.63.98 1.22 0 1.9-.44 3.69-1.33 5.34-.83 1.54-2.03 2.89-3.47 3.9a11.417 11.417 0 0 1-4.83 1.93c-.54.08-1.08.11-1.62.12ZM10.28 2.55c-2.5.28-4.72 1.59-6.19 3.69-1.66 2.36-2.05 5.27-1.06 7.98a37.903 37.903 0 0 0 22.74 22.74c2.71.99 5.62.6 7.98-1.06 2.1-1.47 3.41-3.69 3.69-6.19l-7.45-1.59-3.5 3.5c-.37.37-.94.47-1.41.24A35.335 35.335 0 0 1 8.13 14.91c-.23-.47-.13-1.04.24-1.41l3.5-3.5-1.59-7.45Z" fill="#000"/></g></svg>
            </footer>
        </div>
    );
};

export default Layout;