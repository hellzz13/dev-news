import styles from './styles.module.scss'

export function Header(){
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.svg" alt="Dev News!" />
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Posts</a>
                </nav>
            </div>
        </header>
    );
}