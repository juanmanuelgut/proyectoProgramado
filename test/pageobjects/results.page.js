/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get resultsCounter () {return $('#results')}
    get resultsURL () {return '/search'}
    get searchField () {return }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async firstResult (searchText) {return $(`//div[@class="strip_list" and contains (.,'${searchText}')]`)}

    async clickBtnFisica() {
        await(await btnFisica).click();
    }

    async btnResultados (btnText) {return $(`//div/a[contains(.,'${btnText}')]`)}
   
    async open () {
        return await browser.url('#/search');
    }
}

module.exports = new ResultsPage();