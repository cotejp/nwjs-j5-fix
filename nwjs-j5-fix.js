let obj = {

  fix: function() {


    if (!process || !process.versions.nw || parseFloat(process.versions.nw) < 0.13) {
      return;
    }

    let Readable = nw.require("stream").Readable;
    let util = nw.require("util");

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
