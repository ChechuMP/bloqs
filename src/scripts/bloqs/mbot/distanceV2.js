/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: mBotGetDistance
 *
 * Bloq type: Output
 *
 *
 *
 * Return type: float
 */

var mBotGetDistance = _.merge(_.clone(OutputBloq, true), {

    name: 'mBotGetDistance-v2',
    bloqClass: 'bloq-mbot-getdistance',
    content: [
        [{
            alias: 'text',
            value: 'bloq-mbot-getdistance'
        }, {
            id: 'ULTRASOUND',
            alias: 'dynamicDropdown',
            options: 'sensors'
        }, {
            alias: 'text',
            value: 'in'
        }, {
            id: 'MAGNITUDE',
            alias: 'staticDropdown',
            options: [{
                label: 'cm',
                value: 'cm'
            }, {
                label: 'inches',
                value: 'inches'
            }]
        }]
    ],
    code: '',
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {
        includes: ['BitbloqUS.h', 'BitbloqMBot.h'],
        needInstanceOf: [{
            name: '{ULTRASOUND}',
            type: 'BitbloqUltrasound',
            arguments: ['MCORE::ports[º[{ULTRASOUND}.pin.s]][2]', 'MCORE::ports[º[{ULTRASOUND}.pin.s]][2]']
        }, {
            name: 'mBot',
            type: 'BitbloqMBot'
        }],
        setupCodeAtTheEndOfExtraCode: '{ULTRASOUND}.setup();',
        conditional: {
            aliasId: 'MAGNITUDE',
            code: {
                'cm': '{ULTRASOUND}.readDistanceInCM()',
                'inches': '{ULTRASOUND}.readDistanceInInches()'
            }
        }
    }
});
utils.preprocessBloq(mBotGetDistance);

module.exports = mBotGetDistance;