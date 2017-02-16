'use strict';

module.exports = class Queue extends Array {
  run(data = {}, i = 0) {
    return this.length ? this[i](data).then((data) => this[i + 1] ? this.run(data, i + 1) : Promise.resolve(data)) : Promise.resolve(data);
  }
}
