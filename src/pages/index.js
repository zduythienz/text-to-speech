import styles from './index.css';
import Link from 'umi/link';

export default function () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>Web hỗ trợ đọc câu tiếng Việt để tập phản xạ chơi.</li>
        <li>
          <Link to="/tts">Let's go</Link>
        </li>
      </ul>
    </div>
  );
}
