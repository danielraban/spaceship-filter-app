import './SpaceShipItem.css';

import React from 'react';
import { Spaceship } from '../interfaces/SpaceShip.interface';

interface SpaceshipItemProps {
    spaceship: Spaceship;
}

const SpaceshipItem: React.FC<SpaceshipItemProps> = ({ spaceship }) => {
  return (
    <div className="spaceship-item">
      <h3>{spaceship.name}</h3>
      <ul>
        <li><strong>Colors:</strong> {spaceship.colors.join(', ')}</li>
        <li><strong>Max Speed:</strong> {spaceship.max_speed} km/h</li>
        <li><strong>Pulse Laser:</strong> {spaceship.pulse_laser ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default SpaceshipItem;
