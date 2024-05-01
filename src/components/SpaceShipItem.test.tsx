import { render, screen } from '@testing-library/react';

import React from 'react';
import { Spaceship } from '../interfaces/SpaceShip.interface';
import SpaceshipItem from './SpaceShipItem';

describe('SpaceshipItem', () => {
  const testSpaceship: Spaceship = {
    name: "Star Voyager",
    colors: ["blue", "silver"],
    max_speed: 150,
    pulse_laser: true
  };

  it('renders the spaceship name', () => {
    render(<SpaceshipItem spaceship={testSpaceship} />);
    expect(screen.getByText(testSpaceship.name)).toBeInTheDocument();
  });

  it('contains colors', () => {
    render(<SpaceshipItem spaceship={testSpaceship} />);
    const colorsText = screen.getByText('Colors:');
    expect(colorsText).toBeInTheDocument();
  });

  it('contains max speed', () => {
    render(<SpaceshipItem spaceship={testSpaceship} />);
    expect(screen.getByText('Max Speed:')).toBeInTheDocument();
  });

  it('contains pulse laser', () => {
    render(<SpaceshipItem spaceship={testSpaceship} />);
    expect(screen.getByText('Pulse Laser:')).toBeInTheDocument();
  });
});
