import { TestScheduler } from 'jest';
import { spaceage } from './../src/space.js';

describe('spaceage', () => {
  let spaceAge;
  beforeEach(() => {
  spaceAge = new spaceage(20,78)
  });

  test("should create new instance of spaceage", () => {
    expect(spaceAge.years).toEqual(20);
    expect(spaceAge.finalAge).toEqual(78);
  });
  test("should correctly change years to mercury years", () => {
    expect(spaceAge.earthToMercury(2)).toEqual(8.333333333333334);
  });
});