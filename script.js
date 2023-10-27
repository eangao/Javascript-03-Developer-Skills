// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////////////////////////////////
// Setting up Prettier and VS Code
////////////////////////////////////////
const x = 23;

// And again, Prettier is an opinionated code formatter.
// So opinionated means that they have a strong opinion
// and then basically, when we use the tool,
// we have to accept that opinion.
// And many people don't like that
// but actually, I believe it's a good thing.
// It makes it so I don't have to take a decision
// on how the code should look like.

if (x === 23) console.log(23);

//   "arrowParens": "always"   -  if you want the single argument birthyear enclose with parenthesis
const calcAge = birthYear => 2037 - birthYear;

// So whenever we want to log something,
// we have to write all of this console.log
// and do all this work
// but in VS Code, we can configure snippets,
// which can take that work away from us.
// So let me show you how.
// So we go here in the menu
// into this Preferences submenu
// and then here we can define User Snippets.
// So click on that.
// And then you can open one of these files
// but the best thing to do
// is to just create a New Global Snippets File.

// type cl - to output console.log();
console.log();
