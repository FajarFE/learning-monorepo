import styles from './organisms.module.css';

/* eslint-disable-next-line */
export interface OrganismsProps {}

export function Organisms(props: OrganismsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Organisms!</h1>
    </div>
  );
}

export default Organisms;
