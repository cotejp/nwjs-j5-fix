module.exports = {

  fix: function() {

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
