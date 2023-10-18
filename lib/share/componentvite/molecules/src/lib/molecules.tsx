import styles from './molecules.module.css';

/* eslint-disable-next-line */
export interface MoleculesProps {}

export function Molecules(props: MoleculesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Molecules!</h1>
    </div>
  );
}

export default Molecules;
