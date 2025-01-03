import { Page } from 'playwright';
import {expect} from "@playwright/test";
import assessmentTwoAnswer_content from "../content/assessmentTwoAnswer_content";
import axeTest from "../accessibilityTestHelper";

class AssessmentTwoAnswersPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        this.text = `.summary`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(assessmentTwoAnswer_content.pageTitle)
        ]);
        await axeTest(page);
    }
}

export default AssessmentTwoAnswersPage;