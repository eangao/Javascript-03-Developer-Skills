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
console.log(calcAge(1991));

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
