'use strict'

const crashCollector = require("./crash-collector");

async function foo(z, x, c) {
  let zet = z + x;
  throw new Error("Oops");
}

class Source {
  constructor(lala) {
    this.p = lala
  }
}


class Foo {
  constructor(biz) {
    this.biz = biz;
    this.asd = new Source(this);
  }

  func(a, b, c) {
    method(a, b, c);
  }

  async method(a, b, c) {
    await foo(a, b, { lele: true });
  }
}

function main(a) {
  const f = new Foo("lala");
  f.func(1, 2, false);
}

const m = new Map();

m.set("foo", { lero: [1, 2, 3] });

main(m);
