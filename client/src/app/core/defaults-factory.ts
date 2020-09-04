import { DefaultTeam } from './models/team.interface';
import { DefaultTypes } from './default-types.enum';
import { DefaultCircuit } from './models/circuit.interface';
import { DefaultGrandPrix } from './models/grandprix.interface';
import { DefaultDriver } from './models/driver.interface';
import { DefaultRaceResult } from './models/race-result.interface';

export class DefaultsFactory {

  static getDefaultValue(defaultType: DefaultTypes) {
    switch (defaultType) {
      case DefaultTypes.Circuit:
        return DefaultCircuit;
      case DefaultTypes.Team:
        return DefaultTeam;
      case DefaultTypes.Grandprix:
        return DefaultGrandPrix;
      case DefaultTypes.Driver:
        return DefaultDriver;
      case DefaultTypes.RaceResult:
        return DefaultRaceResult
    }
  }
}