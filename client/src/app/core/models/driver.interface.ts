export interface IDriver {
  id: number;
  name: string;
  age: number;
  grandPrixs: number;
  podiums: number;
  startNumber: number;
  team: string;
  teamId: number;
  country: string;
  countryId: number;
  birthDate: Date;
}

export const DefaultDriver: IDriver = {
  id: 0,
  name: '',
  age: 0,
  grandPrixs: 0,
  podiums: 0,
  startNumber: 0,
  team: '',
  teamId: 0,
  country: '',
  countryId: 0,
  birthDate: new Date(1970, 1, 1)
}
