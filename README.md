# nwjs-j5-fix

This Node.js module enables the use of the [Johnny-Five](http://johnny-five.io/) module inside 
[NW.js](http://nwjs.io/) **v0.13 and above**. It fixes [issues](https://github.com/nwjs/nw.js/issues/586) 
with the `process.stdin` object of NW.js. As of version 0.13-rc2 of NW.js, the problem still exists. 

This is a modularized version of [Rick Waldron](https://github.com/rwaldron)'s code as seen in the 
[Getting started with Johnny-Five and Node-Webkit](https://github.com/rwaldron/johnny-five/wiki/Getting-started-with-Johnny-Five-and-Node-Webkit#writing-the-hook)
tutorial.

Based on Rick's work, I have published an updated and simplified method to use Johnny-Five inside 
NW.js v0.13+. For more information, check out my tutorial on TangibleJS: 
**[Johnny-Five + NW.js = Kickass Physical Computing Environment](http://tangiblejs.com/?p=2020)**.

### Using it

To use it, you first need to install it inside your projet using [npm](https://www.npmjs.com/). From 
the command-line, at the root of your project issue:

    npm install nwjs-j5-fix

Then, simply add this line of code **before requiring Johnny-Five**:

    nw.require("nwjs-johnny-five-fix").fix();

That's it!
