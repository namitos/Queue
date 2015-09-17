'use strict';

module.exports = class Queue extends Array {
	run(data, i) {
		var promises = this;
		i = i || 0;
		if (promises.length > 0) {
			return promises[i](data).then(function (data) {
				if (!promises[i + 1]) {
					return new Promise(function (resolve) {
						resolve(data);
					});
				} else {
					return promises.run(data, i + 1);
				}
			});
		} else {
			return new Promise(function (resolve) {
				resolve(data);
			});
		}
	}
}