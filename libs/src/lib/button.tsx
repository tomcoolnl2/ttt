import styles from './button.module.css';

export function Button() {
    return (
        <button type="button" className={styles['btn']}>
            Button
        </button>
    );
}
