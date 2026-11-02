import { expect, test } from '@playwright/test';

const SPECIMEN = '/docs/multilingual-typography/';

test.describe('multilingual typography', () => {
  test('declares language attributes for each script', async ({ page }) => {
    const response = await page.goto(SPECIMEN);

    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('p[lang="zh-Hans"]')).toBeVisible();
    await expect(page.locator('p[lang="ja"]')).toBeVisible();
    await expect(page.locator('span[lang="zh-Hans"]')).toBeVisible();
  });

  test('gives CJK passages more generous line height than Latin prose', async ({ page }) => {
    await page.goto(SPECIMEN);

    const ratios = await page.evaluate(() => {
      const ratio = (element: Element | null) => {
        if (!element) return 0;
        const style = getComputedStyle(element);
        return parseFloat(style.lineHeight) / parseFloat(style.fontSize);
      };

      return {
        zh: ratio(document.querySelector('p[lang="zh-Hans"]')),
        ja: ratio(document.querySelector('p[lang="ja"]')),
        latin: ratio(document.querySelector('.prose p:not([lang])')),
      };
    });

    expect(ratios.zh).toBeGreaterThan(1.8);
    expect(ratios.ja).toBeGreaterThan(1.8);
    expect(ratios.latin).toBeLessThan(1.8);
  });

  test('provides a CJK-capable font fallback stack', async ({ page }) => {
    await page.goto(SPECIMEN);

    const fontFamily = await page.evaluate(() => getComputedStyle(document.body).fontFamily);
    expect(fontFamily).toMatch(/Microsoft YaHei|PingFang SC|Hiragino Sans|Yu Gothic|Noto Sans CJK/);
  });

  test('keeps inline CJK terms intact inside Latin prose', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(SPECIMEN);

    const lines = await page.locator('.prose span[lang]').evaluateAll((spans) =>
      spans.map((span) => span.getClientRects().length),
    );

    for (const count of lines) {
      expect(count).toBe(1);
    }
  });

  test('does not overflow horizontally at a narrow viewport', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(SPECIMEN);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});
