/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: viewer
 *
 * Bloq type: Statement
 *
 * Description: the viewer write their line in this comments
 *
 */

var phoneConfigTwitter = _.merge(_.clone(StatementBloq, true), {

    name: 'phoneConfigTwitter',
    bloqClass: 'bloq-twitter-config',
    content: [
        [{
            alias: 'text',
            value: 'bloq-twitter-config'
        }]
    ],
    code: '/*sendTwitterAppConfig*/',
    arduino: {
        includes: ['BitbloqSoftwareSerial.h'],
        setupExtraCode: '{PHONE}.begin(º[{PHONE}.baudRate]);',
        needInstanceOf: [{
            name: '{PHONE}',
            type: 'bqSoftwareSerial',
            arguments: [
                'º[{PHONE}.pin.rx]',
                'º[{PHONE}.pin.tx]',
                'º[{PHONE}.baudRate]'
            ]
        }],
        code: '/*sendTwitterAppConfig*/'
    }
});
utils.generateBloqInputConnectors(phoneConfigTwitter);

module.exports = phoneConfigTwitter;
