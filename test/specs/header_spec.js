import FrontPage from '../pages/frontpage';

describe('Front page, header', () => {

    before(() => {
        FrontPage.open();
    });

    it('logo should be present', () => {
        FrontPage.logo.should.exist;
    });

    it('autosuggestion returned relevant results', () => {
        let search_query = 'medium';
        FrontPage.waitForLoad();
        FrontPage.search_icon.isVisible().should.be.true;
        FrontPage.search_icon.click();
        FrontPage.waitForSearchInputIsActive();
        FrontPage.search_input.setValue(search_query);
        FrontPage.waitForAutosuggestions();
        let first_suggestion_text = FrontPage.take_first_link_text_from_autosuggestions();
        first_suggestion_text.toLowerCase().should.contain(search_query.toLowerCase());

    });
});