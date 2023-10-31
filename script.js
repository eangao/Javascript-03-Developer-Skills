// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////////
// Setting up Prettier and VS Code
////////////////////////////////////////
// const x = 23;

// // And again, Prettier is an opinionated code formatter.
// // So opinionated means that they have a strong opinion
// // and then basically, when we use the tool,
// // we have to accept that opinion.
// // And many people don't like that
// // but actually, I believe it's a good thing.
// // It makes it so I don't have to take a decision
// // on how the code should look like.

// if (x === 23) console.log(23);

// //   "arrowParens": "always"   -  if you want the single argument birthyear enclose with parenthesis
// const calcAge = birthYear => 2037 - birthYear;

// // So whenever we want to log something,
// // we have to write all of this console.log
// // and do all this work
// // but in VS Code, we can configure snippets,
// // which can take that work away from us.
// // So let me show you how.
// // So we go here in the menu
// // into this Preferences submenu
// // and then here we can define User Snippets.
// // So click on that.
// // And then you can open one of these files
// // but the best thing to do
// // is to just create a New Global Snippets File.

// // type cl - to output console.log();
// console.log(calcAge(1991));

//////////////////////////////////////////////////////
// Installing Node.js and Setting Up a Dev Environment
//////////////////////////////////////////////////////

// And let's actually start with the easier approach
// which is to simply install the Live Server,
// the extension here on VS Code.

// So as I said before, there is a more professional way
// of running Live Server
// which just by using something called Node.jS,
// which is a JavaScript runtime
// that we can install on our computers.
// Now, if the extension that we just installed works just fine
// for you and you don't want to add any more complexity,
// then you can just skip the rest of this video
// and move on in the course.
// But I will actually use the second approach
// in the rest of the course,
// which is to first install Node.js,
// and then use an npm package called Live Server there.

// for some reason. Okay?
// Now, anyway, after you successfully installed Node.js,
// it will become available as a program
// in the so-called terminal.
// and let's use the VS Code built-in terminal.
// So VS code has a terminal included and to open it,

// number here.
// It doesn't matter what number,
// but as long as you see a number,
// it means that you successfully installed Node.js
// So if you have this number here
// then you can now write npm install live-server -g.

// in cmd
// npm install live-server -g

// to run the live-server
// live-server

///////////////////////////////////////////
// Learning How to Code
///////////////////////////////////////////

/////////////////////////////////////////////////////////
// How to Think Like a Developer: Become a Problem Solver!
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
// Using Google, StackOverflow and MDN
/////////////////////////////////////////////////////////
// // PROBLEM:
// // we work for a company building a smart homethermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude? Answer: difference beteen highest and lowest temp
// // - Hos to compute max and min temperatures?
// // - What's a sensor error? and what to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max (amplitude) and return it

// // ask in google
// // javascript get max value in array
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([100, 3, 5, 8, 11]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // But now let's suppose that after we're done
// // with our solution, the project manager
// // tells us that the function
// // should actually receive two arrays of temperatures
// // and not just one.
// // But the rest of the function should work just the same.
// // Okay, so well, let's quickly write that problem down here.
// // So problem two,
// // function should now receive two arrays of temperatures.
// // So let's try to again, understand the problem.
// // So we can probably ask the question when we have two arrays,
// // do we need to implement the same functionality twice?

// // PROBLEM 2:
// //Function should now recieve 2 arrays of temps

// // 1) Understanding the problem
// // - with 2 arrays, should we implement functionality twice? No! Just merge two arrays

// // 2) Breaking up into sub-problems
// // - Merge 2 arrays?

// // search in google
// //javascrip Merge 2 arrays
// // mdn
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([100, 3, 5, 8, 11]);
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

////////////////////////////////////////////////////////////////////
// Debugging with the Console and Breakpoints
////////////////////////////////////////////////////////////////////

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) FIX
    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  // B) FIND
  // console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify
console.log(measureKelvin());

// Using a debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) Identify
console.log(amplitudeBug);
