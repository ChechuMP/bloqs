/*global require */
'use strict';

var _ = require('lodash');
var StatementInputBloq = require('./basic/statementInputBloq');

var bloq = _.merge(Object.create(StatementInputBloq), {

    name: 'functionVoid',
    content: [
        [{
            alias: 'stringInput',
            value: '',
            placeholder: 'función sin retorno'
        }, {
            alias: 'text',
            value: 'ejecutar:'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;
