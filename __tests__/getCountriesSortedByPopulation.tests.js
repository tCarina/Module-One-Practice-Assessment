const getCountriesSortedByPopulation = require("./../problems/removeVowels.js")

test('Returns an array of country names sorted by population', () => {
  expect(getCountriesSortedByPopulation([
    {
      country: "Algeria",
      population: 41
    },
    {
      country: "Belize",
      population: 0.4
    },
    {
      country: "China",
      population: 1386
    },
    {
      country: "Denmark",
      population: 6
    }
  ])).toStrictEqual(["China", "Algeria", "Denmark", "Belize"])
})
