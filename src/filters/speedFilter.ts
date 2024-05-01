import { Spaceship } from '../interfaces/SpaceShip.interface';

export function filterBySpeed(spaceships: Spaceship[], minSpeed?: number, maxSpeed?: number): Spaceship[] {
  return spaceships.filter(spaceship => {
      if (minSpeed !== undefined && maxSpeed !== undefined) {
          return spaceship.max_speed >= minSpeed && spaceship.max_speed <= maxSpeed;
      } else if (minSpeed !== undefined) {
          return spaceship.max_speed >= minSpeed;
      } else if (maxSpeed !== undefined) {
          return spaceship.max_speed <= maxSpeed;
      }
      return true;
  });
}