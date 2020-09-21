const file = require("./../problems/Day.js")
const Day = file["Day"]
const getAllDayDescriptions = file.getAllDayDescriptions

test("Days can be created with the correct properties", () => {
  const today = new Day(40, "rainy")
  expect(today.temperature).toBe(40)
  expect(today.weather).toBe("rainy")
})

test("Days have a getDescription method that returns the description", () => {
  const today = new Day(80, "cloudy")
  expect(today.getDescription()).toBe("It is 80 and cloudy")
})

test("getAllDayDescriptions returns the descriptions from an array of Days", () => {
  const days = [
    new Day(40, "rainy"),
    new Day(80, "cloudy"),
    new Day(31, "sleeting"),
    new Day(99, "sunny")
  ]
  const correctDescriptions = [
    "It is 40 degrees and rainy",
    "It is 80 degrees and cloudy",
    "It is 31 degrees and sleeting",
    "It is 99 degrees and sunny"
  ]
  expect(getAllDayDescriptions(days)).toStrictEqual(correctDescriptions)
})
