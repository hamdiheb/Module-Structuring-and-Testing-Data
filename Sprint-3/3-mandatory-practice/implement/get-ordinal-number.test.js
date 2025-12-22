const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });


test("should return '25th' for 25", () => {
    expect(getOrdinalNumber(25)).toEqual("25th");
})

test("Should return '31st' for 31", () => {
    expect(getOrdinalNumber(31)).toEqual("31st");
})

test("Expect '20th' for 20", () => {
    expect(getOrdinalNumber(20)).toEqual("20th");
})

test("Expect '10th' for 10", () => {
    expect(getOrdinalNumber(10)).toEqual("10th");
})

test("Expect '91st' to 91", () => {
    expect(getOrdinalNumber(91)).toEqual("91st");
})

test("expect '11th' to 11", () => {
    expect(getOrdinalNumber(11)).toEqual("11th");
})