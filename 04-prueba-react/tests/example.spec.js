// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'
test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageBox = await image.boundingBox()

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageBox?.height).toBeGreaterThan(20)
  await expect(imageBox?.width).toBeGreaterThan(20)
});
