import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import FilterForm from './FilterForm';
import { Filters } from '../interfaces/Filters.interface';
// FilterForm.test.tsx
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('FilterForm', () => {
  const initialFilters: Filters = {
    colors: [],
    colorMode: 'any',
    minSpeed: 50,
    maxSpeed: 150,
    hasPulseLaser: false
  };

  it('renders with initial state from props', () => {
    render(<FilterForm filters={initialFilters} setFilters={jest.fn()} />);
    const hasPulseLaserRadio = screen.getByLabelText('Has Pulse Laser') as HTMLInputElement;
    const doesNotHavePulseLaserRadio = screen.getByLabelText('Does Not Have Pulse Laser') as HTMLInputElement;
    expect(hasPulseLaserRadio.checked).toBe(false);
    expect(doesNotHavePulseLaserRadio.checked).toBe(true);
  });

  it('updates local state on input change', () => {
    const setFiltersMock = jest.fn();
    render(<FilterForm filters={initialFilters} setFilters={setFiltersMock} />);

    const pulseLaserInput = screen.getByLabelText('Has Pulse Laser');
    userEvent.click(pulseLaserInput);
    expect(pulseLaserInput).toBeChecked();
  });

  it('calls setFilters with updated filters on form submission', () => {
    const setFiltersMock = jest.fn();
    render(<FilterForm filters={initialFilters} setFilters={setFiltersMock} />);

    const pulseLaserInput = screen.getByLabelText('Has Pulse Laser');
    userEvent.click(pulseLaserInput);
    userEvent.click(screen.getByRole('button', { name: 'Apply Filters' }));

    waitFor(() => {
      expect(setFiltersMock).toHaveBeenCalledWith(expect.objectContaining({
        hasPulseLaser: true
      }));
    });
  });

  it('changes options based on speed criteria selection', async () => {
    render(<FilterForm filters={initialFilters} setFilters={jest.fn()} />);
    const select = screen.getByLabelText('Speed');
    userEvent.selectOptions(select, 'between');

    await waitFor(() => {
      expect(screen.getByPlaceholderText('Min speed')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Max speed')).toBeInTheDocument();
    });
  });
});
