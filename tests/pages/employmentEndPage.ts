import { Page } from 'playwright';
import {expect} from "@playwright/test";
import employmentEnd_content from "../content/employmentEnd_content";
import axeTest from "../accessibilityTestHelper";

class employmentEndPage {
    private readonly title: string;
    private readonly day: string;
    private readonly month: string;
    private readonly year: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.day = `label[for="response-0"]`
        this.month = `label[for="response-1"]`
        this.year = `label[for="response-2"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(employmentEnd_content.pageTitle),
            expect(page.locator(this.day)).toContainText(employmentEnd_content.text1),
            expect(page.locator(this.month)).toContainText(employmentEnd_content.text2),
            expect(page.locator(this.year)).toContainText(employmentEnd_content.text3),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.day).fill("30");
        await page.locator(this.month).fill("11");
        await page.locator(this.year).fill("2024");
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default employmentEndPage;