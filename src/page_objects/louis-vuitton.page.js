const Page = require('./page');

class LouisVuittonPage extends Page {
  // prettier-ignore
  get title() { return $$('//*[contains(@text, "Louis Vuitton")]')[0]; }
  // prettier-ignore
  get subtitle() { return $('//*[contains(@text, "France-based international fashion house and luxury retail company")]'); }
}

module.exports = new LouisVuittonPage();
