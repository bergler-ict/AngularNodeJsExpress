export interface IGrandPrix {
  id: number;
  year: number;
  name:string;
  circuitId: number;
  circuit: string;
  date: Date;
}

export const DefaultGrandPrix: IGrandPrix = {
  id: 0,
  year: new Date().getFullYear(),
  name: '',
  circuitId: 0,
  circuit: '',
  date: new Date()
}
