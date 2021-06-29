/**
 * sub page containing specific selectors and methods for a specific page
 */
class SpecialistPage {
    /**
     * define selectors using getter methods
     */
    get titulo () {return $('#secondary_nav')}
    
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
      /**
     * overwrite specifc options to adapt it to page object
     */
     async open () {
        return await browser.url('https://terapeutica.digital/#/specialist/bfea3295-af20-4824-8bed-170a227bc1e6');
    }
}

module.exports = new SpecialistPage();