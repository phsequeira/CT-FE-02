import React from 'react';
import { render, screen } from '@testing-library/react';
import RandMContainer from './RandMContainer';

describe('RandMContainer', () => {
  it('renders a list of characters to the page', async () => {
    render(<RandMContainer />);

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});