const HomePage = require('../pageobjects/home.page');
const ResultsPage = require('../pageobjects/results.page');

//Comment changed to test git

let testData = {homeURL: 'https://terapeutica.digital/#',
                searchText: 'María',
                searchFieldText: '¿Buscas a alguien o algo en específico?'}

let testButtons = {'Física' : 'phisical',
                'Lenguaje' : 'language',
                'Ocupacional' : 'ocupational'}

describe('Pruebas Home page', () => {
    before(async ()=>{
        await HomePage.open();
        
    });
    it('a. Hacer click en el botón Buscar sin ingresar Texto no redirige a otro sitio.', async () => {
        await HomePage.clickBtnOnly();
        await browser.validateOnPage({pageURL: testData.homeURL, elementHook: HomePage.title})
    });

    it('b. Hacer click en los botones Física, Lenguaje y Ocupacional cambia el foco al campo de busqueda y el texto cambia', async() =>{
        
        for (key in testButtons){
            await(await HomePage.btnHome(key)).click();
            await expect(await HomePage.searchField).toBeFocused();
            await expect(await HomePage.searchField).toHaveAttributeContaining('placeholder', testData.searchFieldText);
            await browser.refresh();
        }

    });
  
    it('c. Al ingresar el texto María y hacer click en Buscar redirecciona al la página de resultados y el resultado tiene el nombre María', async() =>{
        await HomePage.searchForText(testData.searchText);
        await expect(await ResultsPage.resultsCounter).toBeDisplayed();
        await expect(await ResultsPage.simpleResult(testData.searchText)).toBeExisting();
        
   });    
});