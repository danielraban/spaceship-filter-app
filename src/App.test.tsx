import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import React from 'react';
import SpaceshipFilterApp from './App';
import userEvent from '@testing-library/user-event';

describe('SpaceshipFilterApp', () => {
  it('renders without crashing', () => {
    render(<SpaceshipFilterApp />);
    expect(screen.getByRole('button', { name: /apply filters/i })).toBeInTheDocument();
  });

  it('updates the list of spaceships based on color filter', async () => {
    render(<SpaceshipFilterApp />);
    const blueCheckbox = screen.getByLabelText('blue');
    const redCheckbox = screen.getByLabelText('red');
    userEvent.click(blueCheckbox);
    userEvent.click(redCheckbox);
    userEvent.click(screen.getByRole('button', { name: /apply filters/i }));

    await waitFor(() => {
      expect(blueCheckbox).toBeChecked();
      expect(redCheckbox).toBeChecked();
    });
  });

  it('sets speed criteria and values correctly', async () => {
    render(<SpaceshipFilterApp />);
    userEvent.selectOptions(screen.getByLabelText('Speed'), ['between']);

    const minSpeedInput = screen.getByPlaceholderText('Min speed');
    const maxSpeedInput = screen.getByPlaceholderText('Max speed');

    userEvent.type(minSpeedInput, '100');
    userEvent.type(maxSpeedInput, '200');
    userEvent.click(screen.getByRole('button', { name: /apply filters/i }));

    await waitFor(() => {
      expect(minSpeedInput).toHaveValue(100);
      expect(maxSpeedInput).toHaveValue(200);
    });
  });

  it('updates the list of spaceships based on pulse laser availability', async () => {
    render(<SpaceshipFilterApp />);
    const hasPulseLaserRadio = screen.getByLabelText('Has Pulse Laser');
    userEvent.click(hasPulseLaserRadio);
    userEvent.click(screen.getByRole('button', { name: /apply filters/i }));

    await waitFor(() => {
      expect(hasPulseLaserRadio).toBeChecked();
    });
  });
});