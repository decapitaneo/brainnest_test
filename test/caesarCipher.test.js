const {caesarCipher, cifraDeCesar} = require('../src/caesarCipher');

test("simple test", () => {
    expect(caesarCipher('C', 1)).toEqual('D');
});

test('works with words keeping case', function() {
    expect(caesarCipher('Bcc', 1)).toEqual('Cdd');
});
2
test('phrases', function() {
    expect(caesarCipher('My favorite cat', 5)).toEqual('Rd kfatwnyj hfy');
});

test('wraps', function() {
    expect(caesarCipher('Z', 1)).toEqual('A');
});




