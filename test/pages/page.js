export default class Page {

    open(path) {
        browser.url(path);
    }

    waitForLoad() {
        //TODO: improve using waitForXXX
        browser.pause(3000);
    }
}