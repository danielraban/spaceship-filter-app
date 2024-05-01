import { Spaceship } from '../interfaces/SpaceShip.interface';

export function filterByPulseLaser(spaceships: Spaceship[], hasPulseLaser: boolean): Spaceship[] {
    return spaceships.filter(spaceship => spaceship.pulse_laser === hasPulseLaser);
}