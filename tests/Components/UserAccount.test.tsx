import { render, screen } from '@testing-library/react';

import { User } from '../../src/entities';
import UserAccount from '../../src/Components/UserAccount';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = { id: 1, name: 'jimmy' };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it('should render edit button is user is admin', () => {
    const user: User = { id: 2, name: 'John', isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it('should not render edit button is user is not admin', () => {
    const user: User = { id: 2, name: 'John', isAdmin: false };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole('button');
    expect(button).not.toBeInTheDocument();
  });
});
