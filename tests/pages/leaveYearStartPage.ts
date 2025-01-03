import { Page } from 'playwright';
import {expect} from "@playwright/test";
import leaveYearStart_content from "../content/leaveYearStart_content";
import axeTest from "../accessibilityTestHelper";

class leaveYearStartPage {
    private readonly title: string;
    private readonly text: string;
    private readonly day: string;
    private readonly month: string;
    private readonly year: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-hint`
        this.day = `label[for="response-0"]`
        this.month = `label[for="response-1"]`
        this.year = `label[for="response-2"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(leaveYearStart_content.pageTitle),
            expect(page.locator(this.text)).toContainText(leaveYearStart_content.divText),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.day).fill("1");
        await page.locator(this.month).fill("1");
        await page.locator(this.year).fill("2024");
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default leaveYearStartPage;