import Announcement from '../components/announcement/Announcement';
import React, { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const words = ['Var', 'Dadeewf', 'Gsaad', 'Fas', 'adad', 'adada'];

describe('Announcement', () => {
  let children = '';

  beforeEach(() => {
    children = words[Math.floor(Math.random() * words.length)];
  });

  test('should create Announcement component and compare children and random word', async () => {
    await act(async () => render(<Announcement>{children}</Announcement>));
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
