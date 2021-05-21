const Page = require('./page');

class HermesPage extends Page {
  // prettier-ignore
  get image() { return $('//android.widget.ImageView[@index="0"]'); }
  // prettier-ignore
  get history() { return $('//*[contains(@text, "History")]'); }
  // prettier-ignore
  get historySubtitle() { return $('//*[contains(@text, "Beginnings in the 19th century")]'); }

  scrollToHistory() {
    driver.touchAction([
      { action: 'press', x: 500, y: 1400 },
      { action: 'moveTo', x: 500, y: 300 },
      'release',
    ]);
  }
}

module.exports = new HermesPage();
