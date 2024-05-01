import { Spaceship } from "../interfaces/SpaceShip.interface";
type Mode = 'all' | 'any' | 'none';
export function filterByColour(spaceships: Spaceship[], selectedColors: string[], mode: Mode): Spaceship[] {
    switch (mode) {
        case 'all':
            return spaceships.filter(spaceship => selectedColors.every(color => spaceship.colors.includes(color)));
        case 'any':
            return spaceships.filter(spaceship => spaceship.colors.some(color => selectedColors.includes(color)));
        case 'none':
            return spaceships.filter(spaceship => !spaceship.colors.some(color => selectedColors.includes(color)));
        default:
            return spaceships;
    }
}