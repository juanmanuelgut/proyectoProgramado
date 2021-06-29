/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get resultsCounter () {return $('#results')}
    get resultsURL () {return '/search'}
    get searchField () {return $('//div/input[@type="search"]')}
    get btnBuscar () {return $('//div/input[@type="submit"]')}
    get btnMapa () {return $('//i[@class= "icon-map-1"]')}
    get btnLista () {return $('//i[@class= "icon-th-list"]')}
    get contenedorMapa () {return $('#sidebar')}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async simpleResult (searchText) {return $(`//div[@class="strip_list" and contains (.,'${searchText}')]`)}

    async searchForText (searchString) {
        await (await this.searchField).setValue(searchString);
        await (await this.btnBuscar).waitForEnabled({timeout:1000});
        await (await this.btnBuscar).click();
    }

    async btnResultados (btnText) {return $(`//div/a[contains(.,'${btnText}')]`)}

    async clickBtnMapa() {
        await(await this.btnMapa).click();
    }

    async clickBtnLista() {
        await(await this.btnLista).click();
    }
   
    async open () {
        return await browser.url('#/search');
    }
   
}

module.exports = new ResultsPage();