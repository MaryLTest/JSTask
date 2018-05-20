import FrontPage from '../pages/frontpage';

describe('medium front page, header', () => {

    it('logo should be present', () => {
        FrontPage.open();
        FrontPage.logo.should.exist;
    });

    // it('autosuggestion returned relevant results', () => {
    //     var search_query = 'medium';
    //     FrontPage.open();
    //     browser.pause(8000);
    //     // FrontPage.search_icon.should.
    //     FrontPage.search_icon.click();
    //     browser.pause(6000);

    //     //  FrontPage.search_input.setValue(search_query);
    //     // var first_suggestion_text = FrontPage.take_first_link_text_from_autosuggestions;
    //     // first_suggestion_text.should.contain(search_query);
    // });
});