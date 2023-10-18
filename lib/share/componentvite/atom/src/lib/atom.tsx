import styles from './atom.module.css';

/* eslint-disable-next-line */
export interface AtomProps {}

export function Atom(props: AtomProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Atom!</h1>
    </div>
  );
}

export default Atom;
