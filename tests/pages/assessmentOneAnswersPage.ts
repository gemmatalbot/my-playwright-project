import { Page } from 'playwright';
import {expect} from "@playwright/test";
import assessmentOneAnswer_content from "../content/assessmentOneAnswer_content";
import axeTest from "../accessibilityTestHelper";
import answers_content from "../content/answers_content";

class AssessmentOneAnswersPage {
    private readonly title: string;

    constructor() {
        this.title = `.govuk-heading-xl`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(assessmentOneAnswer_content.pageTitle),
        ]);
        await axeTest(page);
    }
}

export default AssessmentOneAnswersPage;