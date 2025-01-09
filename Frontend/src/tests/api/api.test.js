// api.test.js
const fetch = require('node-fetch');

describe('API tests', () => {
    it('should return 200 status for artifacts', async () => {
        const response = await fetch('http://localhost:5000/api/artifacts');
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data).toBeInstanceOf(Array); // Ensure response contains an array
    });
});
