// performance.test.js
describe('Performance tests', () => {
    it('should load the homepage within 2 seconds', async () => {
        const start = Date.now();
        await page.goto('http://localhost:3000'); // Adjust URL as needed
        const end = Date.now();
        expect(end - start).toBeLessThan(2000); // Ensure page loads in under 2 seconds
    });
});
