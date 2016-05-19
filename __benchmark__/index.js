var Benchmark = require('benchmark');
var objectToString = require('../ots');
var stringToObject = require('../sto');
var suite = new Benchmark.Suite;
var object = {
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: 'whaat'
                    }
                }
            },
            l: {
                n: 'ohno'
            }
        },
        d: {
            c: {
                m: 'foo'
            },
            j: {
                o: 'bar'
            }
        }
    }
};
var string_flat = 'a|b|c|d|e|f=whaat;a|b|l|n=ohno;a|d|c|m=foo;a|d|j|o=bar';
var string_json = '{"a":{"b":{"c":{"d":{"e":{"f":"whaat"}}},"l":{"n":"ohno"}},"d":{"c":{"m":"foo"},"j":{"o":"bar"}}}}';


suite
    .add('objectToString', () => objectToString(object))
    .add('JSON.stringify', () => JSON.stringify(object))
    .add('stringToObject', () => stringToObject(string_flat))
    .add('JSON.parse', () => JSON.parse(string_json))
    .on('cycle', event => console.log(String(event.target)))
    .on('complete', function() {console.log('Fastest is ' + this.filter('fastest').map('name'))})
    .run({ 'async': true });
