import Page from './page';
import Header from '../page-objects/header';

class FrontPage extends Page {
    get logo() { return browser.element('.siteNav-logo'); }
    get about_membership_link() { return browser.element('.link.link--darken.u-accentColor--textDarken.u-baseColor--link.u-xs-hide.js-upgradeMembershipAction.is-touched'); }
    get search_icon() { return browser.element('.buttonSet.buttonSet--wide .button-defaultState'); }
    get search_input() { return browser.element('.js-predictiveSearchInput.textInput.textInput--rounded.textInput--darkText.u-baseColor--textNormal.textInput--transparent'); }
    get sign_in_link() { return browser.element('.button.button--primary.button--chromeless.u-accentColor--buttonNormal.is-inSiteNavBar.u-xs-hide.js-signInButton.is-touched'); }
    get get_started_button() { return browser.element('.button.button--primary.button--withChrome.u-accentColor--buttonNormal.is-inSiteNavBar.js-signUpButton.is-touched'); }
    get navigation_menu() { return browser.element('.u-flexTop.js-carouselInner'); }
    get navigation_menu_arrow_left() { return browser.element('.button.button--chromeless.u-baseColor--buttonNormal.button--withIcon.button--withSvgIcon.js-carouselReverse.is-touched'); }
    get navigation_menu_arrow_right() { return browser.element('.button.button--chromeless.u-baseColor--buttonNormal.button--withIcon.button--withSvgIcon.js-carouselForward.is-touched'); }


    // constructor() {
    //     super();
    //     this.header = new Header();
    // }

    open() {
        super.open('');
    }

    take_first_link_text_from_autosuggestions() {
        var all_links = browser.elements('.u-flexCenter .avatar-text');
        var first_link = all_links[0].element;
        return first_link.getAttribute.text
    }
}

export default new FrontPage();