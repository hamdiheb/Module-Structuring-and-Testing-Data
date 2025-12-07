// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes= time.slice(time.indexOf(":")+1,time.length);

  if (hours > 12 || hours == 12) {
    
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes} pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("09:00");
const targetOutput = "09:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:21");
const targetOutput2 = "11:21 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
