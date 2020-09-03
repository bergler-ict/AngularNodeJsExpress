export interface IRaceResult {
  grandprixId: number;
  driverId: number;
  position: number;
  time: string;
  laps: number;
  fastestLap: boolean;
}

export const DefaultRaceResult: IRaceResult = {
  grandprixId: 0,
  driverId: 0,
  position: 0,
  time: '',
  laps: 0,
  fastestLap: false
}
