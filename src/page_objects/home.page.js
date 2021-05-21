const Page = require('./page');

class HomePage extends Page {
  // prettier-ignore
  get heading() { return $('//android.widget.ImageView[@resource-id="org.wikipedia.alpha:id/main_toolbar_wordmark"]'); }
  // prettier-ignore
  get searchBox() { return $('//android.widget.TextView[@text="Search Wikipedia"]'); }
}

module.exports = new HomePage();
