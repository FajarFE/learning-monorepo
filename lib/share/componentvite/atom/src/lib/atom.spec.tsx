import { render } from '@testing-library/react';

import Atom from './atom';

describe('Atom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Atom />);
    expect(baseElement).toBeTruthy();
  });
});
