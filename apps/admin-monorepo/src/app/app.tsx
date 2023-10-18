// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Atom } from '@nx-monorepo/atom';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <Atom />
      <NxWelcome title="admin-monorepo" />
    </div>
  );
}

export default App;
