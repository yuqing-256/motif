import { expect, test } from '@playwright/test';

test.describe('documentation', () => {
  test('lists the documentation entries', async ({ page }) => {
    const response = await page.goto('/docs/');

    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: 'Documentation' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Getting started/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Design approaches/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Appearance modes/ })).toBeVisible();
  });

  test('renders a documentation entry from its collection', async ({ page }) => {
    const response = await page.goto('/docs/getting-started/');

    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: 'Getting started' })).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: 'Running the site locally' }),
    ).toBeVisible();
    await expect(page.locator('nav[aria-label="Documentation"] a[aria-current="page"]')).toHaveText(
      'Getting started',
    );
    await expect(page.locator('.prose').getByText('mise')).toBeVisible();
  });

  test('renders markdown headings and lists inside a documentation entry', async ({ page }) => {
    await page.goto('/docs/design-approaches/');

    await expect(
      page.getByRole('heading', { level: 1, name: 'Design approaches' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: 'Hugin — Editorial Design Approach' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { level: 2, name: 'Munin — Functional Design Approach' }),
    ).toBeVisible();
    await expect(page.locator('.prose li')).toHaveCount(14);
  });

  test('separates appearance modes from the design approaches', async ({ page }) => {
    const response = await page.goto('/docs/appearance-modes/');

    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: 'Appearance modes' })).toBeVisible();
    await expect(page.locator('.prose')).toContainText('not produced through simple color inversion');
    await expect(page.locator('.prose')).toContainText('Both Hugin and Munin must work coherently');
  });
});

test.describe('blog', () => {
  test('lists blog entries with dates', async ({ page }) => {
    const response = await page.goto('/blog/');

    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Starting the Motif website/ })).toBeVisible();
    await expect(page.getByRole('link', { name: /Choosing Astro for the Motif website/ })).toBeVisible();
    await expect(page.locator('time').first()).toHaveAttribute('datetime', /^2026-/);
  });

  test('renders a blog post with metadata and content', async ({ page }) => {
    const response = await page.goto('/blog/starting-the-motif-website/');

    expect(response?.status()).toBe(200);
    await expect(
      page.getByRole('heading', { level: 1, name: 'Starting the Motif website' }),
    ).toBeVisible();
    await expect(page.locator('time')).toHaveAttribute('datetime', '2026-11-02T00:00:00.000Z');
    await expect(page.getByRole('heading', { level: 2, name: 'Why a website first' })).toBeVisible();
    await expect(page.locator('ul[aria-label="Tags"]')).toContainText('project');
    await expect(page.locator('.prose li')).not.toHaveCount(0);
  });
});

test.describe('navigation', () => {
  test('reaches documentation and blog from the primary navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Docs' }).click();

    await expect(page).toHaveURL(/\/docs\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Documentation' })).toBeVisible();

    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Blog' }).click();

    await expect(page).toHaveURL(/\/blog\/$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible();
  });
});
