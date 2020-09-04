export interface ICircuit {
  id: number;
  name: string;
  length: number;
  lapRecord: string;
  countryId: number;
  country: string;
}

export const DefaultCircuit: ICircuit = {
  id: 0,
  name: '',
  length: 0,
  lapRecord: '',
  countryId: 0,
  country: ''
}
