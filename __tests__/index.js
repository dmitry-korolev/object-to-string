jest.autoMockOff();

const objectToString = require('../ots');
const stringToObject = require('../sto');
const testCases = [
    {
        title: 'Empty object',
        input: {},
        output: ''
    },
    {
        title: 'Simple object',
        input: { a: 'b' },
        output: 'a=b'
    },
    {
        title: 'Simple object #2',
        input: {
            a: 'foo',
            b: 'bar'
        },
        output: 'a=foo;b=bar'
    },
    {
        title: 'Complex object',
        input: {
            a: 'foo',
            b: {
                c: 'bar'
            }
        },
        output: 'a=foo;b|c=bar'
    },
    {
        title: 'Deeply nested properties',
        input: {
            a: {
                b: {
                    c: {
                        d: {
                            e: {
                                f: 'foobar'
                            }
                        }
                    }
                }
            }
        },
        output: 'a|b|c|d|e|f=foobar'
    },
    {
        title: 'Insane object',
        input: {
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
        },
        output: 'a|b|c|d|e|f=whaat;a|b|l|n=ohno;a|d|c|m=foo;a|d|j|o=bar'
    },
    {
        title: 'Settings: custom keySeparator;',
        input: {
            a: 'foo',
            b: 'bar'
        },
        settings: {
            keySeparator: '!'
        },
        output: 'a=foo!b=bar'
    },
    {
        title: 'Settings: custom levelSeparator;',
        input: {
            a: {
                b: {
                    c: 'foobar'
                }
            }
        },
        settings: {
            levelSeparator: '^'
        },
        output: 'a^b^c=foobar'
    },
    {
        title: 'Settings: custom keyValueSeparator;',
        input: {
            a: 'foo',
            b: 'bar'
        },
        settings: {
            keyValueSeparator: '==='
        },
        output: 'a===foo;b===bar'
    },
    {
        title: 'Settings: custom everything;',
        input: {
            a: 'foo',
            b: {
                c: {
                    d: 'bar'
                }
            }
        },
        settings: {
            keySeparator: '!',
            levelSeparator: '^',
            keyValueSeparator: '==='
        },
        output: 'a===foo!b^c^d===bar'
    }
];

describe('Object to string', () => {
    it('Non-object', () => {
        expect(objectToString([])).toBe('');
    });

    testCases.forEach(test => {
        it(test.title, () => {
            expect(objectToString(test.input, test.settings)).toBe(test.output);
        });
    });
});

describe('String to object', () => {
    testCases.forEach(test => {
        it(test.title, () => {
            expect(stringToObject(test.output, test.settings)).toEqual(test.input);
        });
    });
});
