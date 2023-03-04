const {capitalize,reverseString,analyzeArray} = require('../src/utils');


describe('Capitalize Test', () => {
    test('returns the first letter capitalized', () => {
        expect(capitalize('mushu')).toBe('Mushu');
    });
    
    test('capitalize null', () => {
        expect(capitalize(null)).toBe(null);
    });
    
    test('capitalize empty', () => {
        expect(capitalize('')).toBe('');
    });
    
    test('capitalize undefinied', () => {
        expect(capitalize(undefined)).toBe(undefined);
    });
}) 


describe('Reverse String', () =>{
    test('returns the reverse string', () => {
        expect(reverseString('AraraAzul')).toBe('luzAararA');
    });
    
    test('Reverse String null', () => {
        expect(reverseString(null)).toBe(null);
    });
    
    test('Reverse String undefinied', () => {
        expect(reverseString(undefined)).toBe(undefined);
    });
    
    test('Reverse String empty', () => {
        expect(reverseString('')).toBe('');
    });
})


const object = analyzeArray([1,8,3,4,2,6]);

describe('Min, max, Average', () => {
    test("should return correct average", () => {
        expect(object.average).toEqual(4);
    })
    
    test("should return correct min", () => {
        expect(object.min).toEqual(1);
    })
    
    test("should return correct max", () => {
        expect(object.max).toEqual(8);
    })
    
    test("should return correct array length", () => {
        expect(object.length).toEqual(6);
    })
    
    test('check if array is null', () => {
        const arrayTest = null;
        expect(analyzeArray(arrayTest)).toEqual('invalid input');
    });

    test('check if array is undefinied', () => {
        const arrayTest = undefined;
        expect(analyzeArray(arrayTest)).toEqual('invalid input'); //toEqual == (same content but object name diferente) => toBe === (same content)
    });
    
    
    test('should throw an error if array is == 0', () => {
        const emptyArray = [];
        expect(() => analyzeArray(emptyArray)).toThrow("Array is empty!");
    });
});