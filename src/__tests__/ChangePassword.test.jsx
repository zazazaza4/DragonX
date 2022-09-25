import ChangePassword from '../components/changePassword/ChangePassword';
import React, { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('ChangePassword', () => {
  it('click event if passwords don`t match', async () => {
    await act(async () =>
      render(
        <MemoryRouter>
          <ChangePassword />
        </MemoryRouter>
      )
    );

    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText(/match/)).toBeInTheDocument();
  });
});
