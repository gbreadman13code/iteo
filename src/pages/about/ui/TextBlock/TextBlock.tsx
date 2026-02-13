import styles from './TextBlock.module.scss';

export const TextBlock = ({ number, text }: { number: number; text: string }) => {
  return (
    <div className={styles.textBlock}>
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  );
};
