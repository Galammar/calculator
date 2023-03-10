import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [calOutput, setCalOutput] = useState('');
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.textbox}>{calOutput}</div>
        <div className={styles.buttons}>
          <div>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 1)}
            >
              1
            </button>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 2)}
            >
              2
            </button>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 3)}
            >
              3
            </button>
          </div>
          <div>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 4)}
            >
              4
            </button>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 5)}
            >
              5
            </button>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 6)}
            >
              6
            </button>
          </div>
          <div>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 7)}
            >
              7
            </button>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 8)}
            >
              8
            </button>
            <button
              className={styles.pad}
              onClick={() => setCalOutput(calOutput + 9)}
            >
              9
            </button>
          </div>
          <div>
            <button
              className={(styles.zero, styles.pad)}
              onClick={() => setCalOutput(calOutput + 0)}
            >
              0
            </button>
            <button
              className={(styles.differentBtn, styles.pad)}
              onClick={() => setCalOutput(calOutput + '+')}
            >
              +
            </button>
            <button
              className={(styles.differentBtn, styles.pad)}
              onClick={() => setCalOutput(calOutput + '-')}
            >
              -
            </button>
            <div className={styles.other}></div>
            <div></div>
            <div>
              <button
                className={(styles.differentBtn, styles.pad)}
                onClick={() => setCalOutput(calOutput + '*')}
              >
                *
              </button>
              <button
                className={(styles.differentBtn, styles.pad)}
                onClick={() => setCalOutput(calOutput + '/')}
              >
                /
              </button>
              <button
                className={(styles.equals, styles.pad)}
                onClick={() => setCalOutput(eval(calOutput))}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
// function createButtonRow() {
//   for (i = 0; i < 3; i++) {
//     return <div>{createButtonColumn()}</div>;
//   }
// }

// function createButtonColumn() {
//   for (i = 0; i < 3; i++) {
//     return <button>{i}</button>;
//   }
// }
