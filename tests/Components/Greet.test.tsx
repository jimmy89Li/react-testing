import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import React from 'react';
import Greet from '../../src/Components/Greet';

describe('Greet', () => {
  it('should render Hello with the name when the name is provided', () => {
    render(<Greet name='Joe' />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/joe/i);
  });

  it('should render login button when the name is not provided', () => {
    render(<Greet />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
