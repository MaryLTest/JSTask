import Page from './page';


class FrontPage extends Page {
    get logo() { return browser.element('.siteNav-logo'); }
    get about_membership_link() { return browser.element('.link.link--darken.u-accentColor--textDarken.u-baseColor--link.u-xs-hide.js-upgradeMembershipAction.is-touched'); }
    get search_icon() { return browser.element('.svgIcon.svgIcon--search.svgIcon--25px.u-top0.u-baseColor--iconLight'); }
    get search_input() { return browser.element('.js-predictiveSearchInput.textInput.textInput--rounded.textInput--darkText.u-baseColor--textNormal.textInput--transparent'); }
    get sign_in_link() { return browser.element('.button.button--primary.button--chromeless.u-accentColor--buttonNormal.is-inSiteNavBar.u-xs-hide.js-signInButton.is-touched'); }
    get get_started_button() { return browser.element('.button.button--primary.button--withChrome.u-accentColor--buttonNormal.is-inSiteNavBar.js-signUpButton.is-touched'); }
    get navigation_menu() { return browser.element('.u-flexTop.js-carouselInner'); }
    get navigation_menu_arrow_left() { return browser.element('.button.button--chromeless.u-baseColor--buttonNormal.button--withIcon.button--withSvgIcon.js-carouselReverse.is-touched'); }
    get navigation_menu_arrow_right() { return browser.element('.button.button--chromeless.u-baseColor--buttonNormal.button--withIcon.button--withSvgIcon.js-carouselForward.is-touched'); }

    open() {
        super.open('');
    }

    take_first_link_text_from_autosuggestions() {
        let first_link = browser.element('.avatar-text');
        return first_link.getText();
    }

    waitForAutosuggestions() {
        //TODO: improve using waitForXXX
        browser.pause(3000);
    }

    waitForSearchInputIsActive() {
        //TODO: improve using waitForXXX
        browser.pause(1000);
    }

}

export default new FrontPage();