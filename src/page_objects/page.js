module.exports = class Page {
  clearInput(element) {
    for (let i = 0; i <= element.getValue().length; i++) {
      element.setValue('\uE003');
    }
  }
};
