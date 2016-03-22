var obj = {

  fix: function() {

    if (!process.versions.nw || parseFloat(process.versions.nw) < 0.13) {
      throw "This module is only relevant when run under NW.js v0.13 or higher."
    }

    var Readable = nw.require("stream").Readable;
    var util = nw.require("util");

    function MyStream(opt) {
      Readable.call(this, opt);
    }

    util.inherits(MyStream, Readable);

    MyStream.prototype._read = function() {};

    process.__defineGetter__("stdin", function() {
      if (process.__stdin) return process.__stdin;
      process.__stdin = new MyStream();
      return process.__stdin;
    });

  }

};

obj.abracadabra = obj.fix;

module.exports = obj;