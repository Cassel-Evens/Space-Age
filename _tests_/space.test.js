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
  test("Should correctly get the users life left on Earth", () => {
    expect(spaceAge.lifeLeftEarth()).toEqual(58);
  });
  test("Should calculate how many years they have left mercury", () => {
    expect(spaceAge.lifeLeftMercury()).toEqual(241.66666666666666);
  });
  test("Should calculate and return years left to live on Mars", () => {
    expect(spaceAge.lifeLeftMars()).toEqual(30.851063829787236);
  });
  test("Should calculate and return years left to live on Venus", () => {
    expect(spaceAge.lifeLeftVenus()).toEqual(93.5483870967742);
  });
});