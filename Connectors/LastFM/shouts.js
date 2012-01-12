/*
 *
 * Copyright (C) 2012, The Locker Project
 * All rights reserved.
 *
 * Please see the LICENSE file for more information.
 *
 */

var path   = require('path')
  , lastfm = require(path.join(__dirname, 'lib.js'));

var shouts = [];

exports.sync = function (processInfo, cb) {
    lastfm.getShouts(processInfo
                   , function (shout) {
                         shout.id = shout.date;
                         shouts.push(shout);
                     }
                   , function (err, config) {
                         if (err) {
                             console.error(err);
                             cb(err);
                         }
                         else {
                             cb(null, {config: config, data : {shout : shouts}});
                         }
                     }
    );
};
