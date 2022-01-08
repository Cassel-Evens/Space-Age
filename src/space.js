export class spaceage {
  constructor(years, finalAge) {
    this.years = years;
    this.finalAge = finalAge;
  }
  earthToMercury(years) {
    return years / .24;
  } 
  earthToMars(years) {
    return years / 1.88;
  }
  earthToVenus(years) {
    return years / .62;
  }
  earthToJupiter(years) {
    return years / 11.86; 
  }
  lifeLeftEarth() {
    return this.finalAge - this.years;
  }
  lifeLeftMercury() {
    return this.finalAge / .24 - this.years /.24;
  }
  lifeLeftMars() {
    return this.finalAge / 1.88 - this.years / 1.88;
  }
  lifeLeftVenus() {
    return this.finalAge / .62 - this.years / .62;
  }
  lifeLeftJupiter() {
    return this.finalAge / 11.86 - this.years / 11.86;
  }
  yearsOverDue() {
    return this.years - this.finalAge;
  }
};