import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftsPattern_content from "../content/shiftsPattern_content";
import axeTest from "../accessibilityTestHelper";
import workedPerWeek_content from "../content/workedPerWeek_content";

class ShiftsPatternPage {
    private readonly title: string;
    private readonly text: string;
    private readonly field: string;

    constructor() {
        this.title = `.govuk-label-wrapper`
        this.text = `.govuk-hint`
        this.field = `#response`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(shiftsPattern_content.pageTitle),
            expect(page.locator(this.text)).toContainText(shiftsPattern_content.divText),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.field).fill("10");
        // Click the continue button
        await page.getByRole("button", { name: "Continue" }).click();
    }

}

export default ShiftsPatternPage;