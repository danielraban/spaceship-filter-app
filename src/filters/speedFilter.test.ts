import { Spaceship } from '../interfaces/SpaceShip.interface';
import { filterBySpeed } from './speedFilter';

describe('filterBySpeed', () => {

  const spaceships: Spaceship[] = [
    { id: '1', name: "Star Voyager", colors: ["blue", "silver"], max_speed: 150, pulse_laser: true },
    { id: '2', name: "Galaxy Fighter", colors: ["red", "black"],  max_speed: 100, pulse_laser: true },
    { id: '3', name: "Meteor Chaser", colors: ["yellow", "black"],  max_speed: 180, pulse_laser: true  },
    { id: '4', name: "Comet Rider", colors: ["red", "blue", "green"], max_speed: 130, pulse_laser: true  }
  ];


  it('should return spaceships with max_speed greater than or equal to minSpeed when only minSpeed is provided', () => {
    const minSpeed = 130;
    const result = filterBySpeed(spaceships, minSpeed);
    const expected = [spaceships[0], spaceships[2], spaceships[3]];
    expect(result).toEqual(expected);
  });

  it('should return spaceships with max_speed less than or equal to maxSpeed when only maxSpeed is provided', () => {
    const maxSpeed = 130;
    const result = filterBySpeed(spaceships, undefined, maxSpeed);
    const expected = [spaceships[1], spaceships[3]];
    expect(result).toEqual(expected);
  });

  it('should return spaceships with max_speed within the specified range when both minSpeed and maxSpeed are provided', () => {
    const minSpeed = 120;
    const maxSpeed = 160;
    const result = filterBySpeed(spaceships, minSpeed, maxSpeed);
    const expected = [spaceships[0], spaceships[3]];
    expect(result).toEqual(expected);
  });

  it('should return all spaceships if neither minSpeed nor maxSpeed is provided', () => {
    const result = filterBySpeed(spaceships);
    expect(result).toEqual(spaceships);
  });

  it('should handle an empty array of spaceships', () => {
    const result = filterBySpeed([], 100, 200);
    expect(result).toEqual([]);
  });
});
