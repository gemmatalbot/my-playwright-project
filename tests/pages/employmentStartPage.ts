import { Page } from 'playwright';
import {expect} from "@playwright/test";
import employmentStart_content from "../content/employmentStart_content";
import axeTest from "../accessibilityTestHelper";
import workOutHoliday_content from "../content/workOutHoliday_content";

class employmentStartPage {
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
            expect(page.locator(this.title)).toHaveText(employmentStart_content.pageTitle),
            expect(page.locator(this.day)).toContainText(employmentStart_content.text1),
            expect(page.locator(this.month)).toContainText(employmentStart_content.text2),
            expect(page.locator(this.year)).toContainText(employmentStart_content.text3),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.day).fill("30");
        await page.locator(this.month).fill("1");
        await page.locator(this.year).fill("2024");
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default employmentStartPage;