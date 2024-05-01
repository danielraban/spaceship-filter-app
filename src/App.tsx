import React, { useEffect, useState } from 'react';

import FilterForm from './components/FilterForm';
import { Filters } from './interfaces/Filters.interface';
import { Spaceship } from './interfaces/SpaceShip.interface';
import SpaceshipList from './components/SpaceShipList';
import { filterByColour } from './filters/colourFilter';
import { filterByPulseLaser } from './filters/pulseLaserFilter';
import { filterBySpeed } from './filters/speedFilter';
import spaceshipsData from './data/data.json';

function SpaceshipFilterApp() {
  const [spaceships, setSpaceships] = useState<Spaceship[]>([]);
  const [filters, setFilters] = useState<Filters>({
    colors: [],
    colorMode: 'any',
    minSpeed: undefined,
    maxSpeed: undefined,
    hasPulseLaser: undefined
  });

  useEffect(() => {
    let filteredSpaceships = spaceshipsData as Spaceship[];
    if (filters.colors.length > 0) {
      filteredSpaceships = filterByColour(filteredSpaceships, filters.colors, filters.colorMode);
    }
    filteredSpaceships = filterBySpeed(filteredSpaceships, filters.minSpeed, filters.maxSpeed);
    if (filters.hasPulseLaser !== undefined) {
      filteredSpaceships = filterByPulseLaser(filteredSpaceships, filters.hasPulseLaser);
    }

    setSpaceships(filteredSpaceships);
  }, [filters]);

  return (
    <div>
      <FilterForm filters={filters} setFilters={setFilters} />
      <SpaceshipList spaceships={spaceships} />
    </div>
  );
}

export default SpaceshipFilterApp;
