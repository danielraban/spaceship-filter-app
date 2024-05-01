import './SpaceShipList.css';

import React from 'react';
import { Spaceship } from '../interfaces/SpaceShip.interface';
import SpaceshipItem from './SpaceShipItem';
import { v4 as uuidv4 } from 'uuid';

interface SpaceshipListProps {
    spaceships: Spaceship[];
}

const SpaceshipList: React.FC<SpaceshipListProps> = ({ spaceships }) => {
  const enhancedSpaceships = spaceships.map(spaceship => ({
    ...spaceship,
    id: spaceship.id || uuidv4(), // Ensure each spaceship has a unique id
  }));

  return (
    <div className='spaceship-list'>
      {enhancedSpaceships.length > 0 ? (
        enhancedSpaceships.map(spaceship => (
          <SpaceshipItem key={spaceship.id} spaceship={spaceship} />
        ))
      ) : (
        <p>No spaceships match the selected filters.</p>
      )}
    </div>
  );
};

export default SpaceshipList;
