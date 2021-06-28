/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get searchField () {return $('#search-input')}
    get btnBuscar () { return $('.btn_search') }
    get title() {return $('//*[text()="Terapeútica Digital"]')}
    get searchFieldPlaceholder() {return this.searchField.getAttribute('placeholder')}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickBtnOnly() {
        await (await this.btnBuscar).click(); 
    }

    async searchForText (searchString) {
        await (await this.searchField).setValue(searchString);
        await (await this.btnBuscar).click();
    }

    async btnHome (btnText) {return $(`//div/ul/li[contains(.,'${btnText}')]`)}
      /**
     * overwrite specifc options to adapt it to page object
     */
     async open () {
        return await browser.url('/');
    }
}

module.exports = new HomePage();