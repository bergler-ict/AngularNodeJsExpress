import { IRaceResult } from './race-result.interface';

export interface IRaceResultsForm {
  grandprixId: number;
  grandprix: { raceResults: IRaceResult[] }
}