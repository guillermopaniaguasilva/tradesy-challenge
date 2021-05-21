const Page = require('./page');

class SearchPage extends Page {
  // prettier-ignore
  get searchInput() { return $('//android.widget.EditText[@resource-id="org.wikipedia.alpha:id/search_src_text"]'); }
  // prettier-ignore
  get firstResult() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]'); }
  // prettier-ignore
  get firstResultTitle() { return $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/page_list_item_title"]'); }
  // prettier-ignore
  get firstResultDescription() { return $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/page_list_item_description"]'); }
  // prettier-ignore
  get clearQuery() { return $('~Clear query'); }
  // prettier-ignore
  get searchHistoryElements() { return $$('//android.widget.TextView'); }
  // prettier-ignore
  get searchHistoryFirstElement() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.TextView[1]'); }
  // prettier-ignore
  get searchHistorySecondElement() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.TextView[2]'); }
  // prettier-ignore
  get deleteHistory() { return $('~Clear history'); }
  // prettier-ignore
  get confirmDeletion() { return $('//android.widget.Button[@resource-id="android:id/button1"]'); }
  // prettier-ignore
  get searchHistoryEmpty() { return $('//android.widget.LinearLayout[@resource-id="org.wikipedia.alpha:id/search_empty_container"]'); }
}

module.exports = new SearchPage();
