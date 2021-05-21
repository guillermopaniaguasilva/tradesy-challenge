const Page = require('./page');

class OnboardingPage extends Page {
  // prettier-ignore
  get skip() { return $('//*[contains(@text,"SKIP")]'); }
  // prettier-ignore
  get continue() { return $('//*[contains(@text,"CONTINUE")]'); }
  // prettier-ignore
  get heading() { return $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/primaryTextView"]'); }
  // prettier-ignore
}

module.exports = new OnboardingPage();
