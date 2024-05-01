import { Spaceship } from '../interfaces/SpaceShip.interface';
import { filterByPulseLaser } from './pulseLaserFilter';

describe('filterByPulseLaser', () => {
  const spaceships: Spaceship[] = [
    { id: '1', name: "Star Voyager", colors: ["blue", "silver"], max_speed: 200, pulse_laser: true },
    { id: '2', name: "Galaxy Fighter", colors: ["red", "black"],  max_speed: 200, pulse_laser: false },
    { id: '3', name: "Meteor Chaser", colors: ["yellow", "black"],  max_speed: 200, pulse_laser: true  },
    { id: '4', name: "Comet Rider", colors: ["red", "blue", "green"], max_speed: 200, pulse_laser: false  }
  ];


  it('should return spaceships with pulse lasers when hasPulseLaser is true', () => {
    const hasPulseLaser = true;
    const result = filterByPulseLaser(spaceships, hasPulseLaser);
    const expected = [spaceships[0], spaceships[2]];
    expect(result).toEqual(expected);
  });

  it('should return spaceships without pulse lasers when hasPulseLaser is false', () => {
    const hasPulseLaser = false;
    const result = filterByPulseLaser(spaceships, hasPulseLaser);
    const expected = [spaceships[1], spaceships[3]];
    expect(result).toEqual(expected);
  });

  it('should handle empty spaceships array', () => {
    const hasPulseLaser = true;
    const result = filterByPulseLaser([], hasPulseLaser);
    expect(result).toEqual([]);
  });
});
