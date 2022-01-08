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
  test("should correctly change earth years to mars years", () => {
    expect(spaceAge.earthToMars(2)).toEqual(1.0638297872340425);
  });
  test("should correctly change earth years to venus years", () => {
    expect(spaceAge.earthToVenus(2)).toEqual(3.2258064516129035);
  });
  test("should correctly change earth years to jupiter years", () => {
    expect(spaceAge.earthToJupiter(2)).toEqual(0.16863406408094436);
  });
});