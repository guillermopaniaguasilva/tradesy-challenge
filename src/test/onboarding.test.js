const OnboardingPage = require('../page_objects/onboarding.page');
const HomePage = require('../page_objects/home.page');

const HEADING_FIRST_SCREEN = 'The Free Encyclopedia\n…in over 300 languages';
const HEADING_SECOND_SCREEN = 'New ways to explore';

it('should display display SKIP & CONTINUE buttons and be able to get to Home Screen', () => {
  expect(OnboardingPage.skip).toExist();
  expect(OnboardingPage.continue).toExist();
  expect(OnboardingPage.heading).toHaveTextContaining(HEADING_FIRST_SCREEN);
  OnboardingPage.continue.click();
  expect(OnboardingPage.heading).toHaveTextContaining(HEADING_SECOND_SCREEN);
  OnboardingPage.skip.click();
  expect(HomePage.heading).toExist();
  expect(HomePage.searchBox).toExist();
});
