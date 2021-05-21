const SearchPage = require('../page_objects/search.page');

module.exports = (term) => {
  SearchPage.searchInput.setValue(term);
  SearchPage.firstResult.waitForDisplayed();
};
