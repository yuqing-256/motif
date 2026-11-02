import { expect, test } from '@playwright/test';

test.describe('home page', () => {
  test('renders the Motif landing content', async ({ page }) => {
    const response = await page.goto('/');

    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Motif/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.getByRole('heading', { level: 1, name: 'Motif' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Two approaches' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Hugin' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Munin' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Appearance modes' })).toBeVisible();
    await expect(page.locator('section[aria-labelledby="appearances-heading"]')).toContainText(
      'Motif Dark',
    );
    await expect(page.locator('body')).not.toContainText('Hugin Dark');
    await expect(page.locator('body')).not.toContainText('Munin Light');
    await expect(page.getByRole('link', { name: 'Motif on GitHub' })).toBeVisible();
  });

  test('serves the generated Tailwind stylesheet', async ({ page }) => {
    await page.goto('/');

    const bodyStyles = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
    expect(bodyStyles).toBe('rgb(255, 255, 255)');
  });
});

test.describe('not found page', () => {
  test('renders the 404 page for unknown routes', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');

    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1, name: 'Page not found' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Return to the homepage' })).toBeVisible();
  });
});
