import { render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct text', () => {
    const { getByText } = render(<Button />);
    expect(getByText('Button')).toBeTruthy();
  });
});