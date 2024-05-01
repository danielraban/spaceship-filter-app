export interface Spaceship {
  id?: string; // Making 'id' optional since it might be added dynamically
  name: string;
  colors: string[];
  max_speed: number;
  pulse_laser: boolean;
}
