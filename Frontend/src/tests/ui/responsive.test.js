// responsive.test.js
describe('Responsive Design', () => {
    it('should display the page correctly on mobile', async () => {
        await page.setViewport({ width: 375, height: 667 }); // Mobile view
        await page.goto('http://localhost:3000');
        const element = await page.$('h1');
        const text = await element.evaluate(el => el.textContent);
        expect(text).toBe('Welcome to the Museum');
    });

    it('should display the page correctly on desktop', async () => {
        await page.setViewport({ width: 1200, height: 800 }); // Desktop view
        await page.goto('http://localhost:3000');
        const element = await page.$('h1');
        const text = await element.evaluate(el => el.textContent);
        expect(text).toBe('Welcome to the Museum');
    });
});
