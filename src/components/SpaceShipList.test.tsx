import { render, screen } from '@testing-library/react';

import React from 'react';
import { Spaceship } from '../interfaces/SpaceShip.interface';
import SpaceshipList from './SpaceShipList';

jest.mock('./SpaceshipItem', () => {
  return {
    __esModule: true,
    default: ({ spaceship }: { spaceship: Spaceship }) => (
      <div data-testid="mock-spaceship-item">{spaceship.name}</div>
    ),
  };
});

describe('SpaceshipList', () => {
  const spaceships: Spaceship[] = [
    { id: '1', name: "Star Voyager", colors: ["blue", "silver"], max_speed: 150, pulse_laser: true },
    { id: '2', name: "Galaxy Fighter", colors: ["red", "black"], max_speed: 100, pulse_laser: false }
  ];

  it('renders a list of spaceship items when spaceships are provided', () => {
    render(<SpaceshipList spaceships={spaceships} />);
    const spaceshipItems = screen.getAllByTestId('mock-spaceship-item');
    expect(spaceshipItems.length).toBe(spaceships.length);
    expect(spaceshipItems[0]).toHaveTextContent(spaceships[0].name);
    expect(spaceshipItems[1]).toHaveTextContent(spaceships[1].name);
  });

  it('renders a message when no spaceships are provided', () => {
    render(<SpaceshipList spaceships={[]} />);
    expect(screen.getByText('No spaceships match the selected filters.')).toBeInTheDocument();
  });
});
