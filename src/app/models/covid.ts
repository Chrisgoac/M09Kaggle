export interface Covid {
    country: string;
    continent: string;
    population: number;
    totalCases: number;
    newCases: number;
    totalDeaths: number;
    newDeaths: number;
    totalRecovered: number;
    newRecovered: number;
    activeCases: number;
    seriousCritical: number;
    totCasesPer1M: number;
    deathsPer1M: number;
    totalTests: number;
    testsPer1M: number;
    region: string;
  }
  
  export class CovidModel implements Covid {
    constructor(
      public country = '',
      public continent = '',
      public population = 0,
      public totalCases = 0,
      public newCases = 0,
      public totalDeaths = 0,
      public newDeaths = 0,
      public totalRecovered = 0,
      public newRecovered = 0,
      public activeCases = 0,
      public seriousCritical = 0,
      public totCasesPer1M = 0,
      public deathsPer1M = 0,
      public totalTests = 0,
      public testsPer1M = 0,
      public region = ''
    ) {}
  }
  