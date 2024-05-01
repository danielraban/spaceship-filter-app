import { Spaceship } from '../interfaces/SpaceShip.interface';
import { filterByColour } from './colourFilter';

describe('filterByColour', () => {
  const spaceships: Spaceship[] = [
    { id: '1', name: "Star Voyager", colors: ["blue", "silver"], max_speed: 200, pulse_laser: true },
    { id: '2', name: "Galaxy Fighter", colors: ["red", "black"],  max_speed: 200, pulse_laser: true },
    { id: '3', name: "Meteor Chaser", colors: ["yellow", "black"],  max_speed: 200, pulse_laser: true  },
    { id: '4', name: "Comet Rider", colors: ["red", "blue", "green"], max_speed: 200, pulse_laser: true  }
  ];

  it('should filter spaceships with all selected colors (mode "all")', () => {
    const selectedColors = ["red", "black"];
    const mode = "all";
    const filtered = filterByColour(spaceships, selectedColors, mode);
    expect(filtered).toEqual([spaceships[1]]);
  });

  it('should filter spaceships with at least one of the selected colors (mode "any")', () => {
    const selectedColors = ["black", "green"];
    const mode = "any";
    const filtered = filterByColour(spaceships, selectedColors, mode);
    expect(filtered).toEqual([spaceships[1], spaceships[2], spaceships[3]]);
  });

  it('should filter spaceships with none of the selected colors (mode "none")', () => {
    const selectedColors = ["purple"];
    const mode = "none";
    const filtered = filterByColour(spaceships, selectedColors, mode);
    expect(filtered).toEqual(spaceships);
  });

  it('should return all spaceships if mode is undefined or invalid', () => {
    const selectedColors = ["red"];
    const mode = "unknown" as any; // Cast to any to simulate an invalid mode input
    const filtered = filterByColour(spaceships, selectedColors, mode);
    expect(filtered).toEqual(spaceships);
  });
});