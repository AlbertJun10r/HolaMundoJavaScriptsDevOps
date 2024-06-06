// __tests__/index.test.js
const holaMundo = require('../index');

test('debe retornar "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});
