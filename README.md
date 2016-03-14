# nwjs-j5-fix

This Node.js module enables the use of the [Johnny-Five](http://johnny-five.io/) module inside 
[NW.js](http://nwjs.io/) v0.13 and above. It fixes [issues](https://github.com/nwjs/nw.js/issues/586) 
with the `process.stdin` object of NW.js. As of version 0.13-rc2 of NW.js, the problem still exists. 

I have not written this code. It is a modularized version of the code from Rick Waldron as seen in 
the [Getting started with Johnny-Five and Node-Webkit](https://github.com/rwaldron/johnny-five/wiki/Getting-started-with-Johnny-Five-and-Node-Webkit#writing-the-hook)
tutorial.

To use it, simply add this line of code to your project (before requiring Johnny-Five):

    nw.require("nwjs-johnny-five-fix").fix();

Based on Rick's work, I have published an updated and simplified method to use Johnny-Five inside NW.js v0.13+. For 
more information, check out my own tutorial on TangibleJS: **[Johnny-Five + NW.js = Kickass Physical Computing Environment](http://tangiblejs.com/?p=2020)**.

### Using it

To use it, simply download the `nwjs-j5-fix.js` file and add a link to it in your HTML file. The usual way to do this is to 
add this code in the head section:

    <script src="nwjs-j5-fix.js"></script>

Just make sure the code in this file is executed before creating a new Johnny-Five `Board` object.
