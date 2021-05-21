const OnboardingPage = require('../page_objects/onboarding.page');
const HomePage = require('../page_objects/home.page');
const SearchPage = require('../page_objects/search.page');
const LouisVuittonPage = require('../page_objects/louis-vuitton.page');
const HermesPage = require('../page_objects/hermes.page');
const searchTerm = require('../helpers/search');

const FIRST_SEARCH_TERM = 'Louis Vuitton';
// eslint-disable-next-line operator-linebreak
const FIRST_SEARCH_TERM_DESCRIPTION =
  'France-based international fashion house and luxury retail company';
const SECOND_SEARCH_TERM = 'Hermés';

beforeEach(() => {
  driver.launchApp();
});

afterEach(() => {
  driver.closeApp();
});

it('should be able to search for an article', () => {
  OnboardingPage.skip.click();
  HomePage.searchBox.click();
  searchTerm(FIRST_SEARCH_TERM);
  expect(SearchPage.firstResultTitle).toExist();
  expect(SearchPage.firstResultTitle).toHaveText(FIRST_SEARCH_TERM);
  expect(SearchPage.firstResultDescription).toExist();
  expect(SearchPage.firstResultDescription).toHaveText(
    FIRST_SEARCH_TERM_DESCRIPTION,
  );
  SearchPage.firstResult.click();
  LouisVuittonPage.title.waitForDisplayed();
  expect(LouisVuittonPage.subtitle).toExist();
  driver.back();
  SearchPage.clearQuery.click();
  searchTerm(SECOND_SEARCH_TERM);
  expect(SearchPage.firstResult).toExist();
  SearchPage.firstResult.click();
  HermesPage.image.waitForDisplayed();
  // HermesPage.scrollToHistory();
  expect(HermesPage.historySubtitle).toExist();
});

it('should clear search history', () => {
  OnboardingPage.skip.click();
  HomePage.searchBox.click();
  searchTerm(FIRST_SEARCH_TERM);
  SearchPage.firstResult.click();
  LouisVuittonPage.title.waitForDisplayed();
  driver.back();
  SearchPage.clearQuery.click();
  searchTerm(SECOND_SEARCH_TERM);
  SearchPage.firstResult.click();
  HermesPage.image.waitForDisplayed();
  driver.back();
  SearchPage.clearQuery.click();
  // expect(SearchPage.searchHistoryElements).toBeElementsArrayOfSize(2);
  expect(SearchPage.searchHistoryFirstElement).toHaveText(SECOND_SEARCH_TERM);
  expect(SearchPage.searchHistorySecondElement).toHaveText(FIRST_SEARCH_TERM);
  SearchPage.deleteHistory.click();
  SearchPage.confirmDeletion.waitForDisplayed();
  SearchPage.confirmDeletion.click();
  expect(SearchPage.searchHistoryEmpty).toExist();
});
