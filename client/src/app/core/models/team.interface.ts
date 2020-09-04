export interface ITeam {
  id: number;
  name: string;
  fullname: string;
  manufacturer: string;
  countryId: number;
}

export const DefaultTeam: ITeam = {
  id: 0,
  name: '',
  fullname: '',
  manufacturer: '',
  countryId: 1
}