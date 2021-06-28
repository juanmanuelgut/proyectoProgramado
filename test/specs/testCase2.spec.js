const HomePage = require('../pageobjects/home.page');
const ResultsPage = require('../pageobjects/results.page');

//Comment changed to test git

let testButtons = {'Física' : 'phisical',
                'Lenguaje' : 'language',
                'Ocupacional' : 'ocupational'} 

describe('Página de Resultados', () => {
    before(async ()=>{
        await ResultsPage.open();
        
    });
    it('a. Cambiar especialidad cambia el URL a reflejar la especilidad seleccionada', async () => {

        for (key in testButtons){
            await(await ResultsPage.btnResultados(key)).click();
            await expect(browser).toHaveUrlContaining(testButtons[key]);
        }
    });

    it('b. Cambiar especialidad cambia el URL a reflejar la especilidad seleccionada', async () => {

        for (key in testButtons){
            await(await ResultsPage.btnResultados(key)).click();
            await expect(browser).toHaveUrlContaining(testButtons[key]);
        }
    });

    /*it('c. Al ingresar el texto María y hacer click en Buscar redirecciona al la página de resultados y el resultado tiene el nombre María', async() =>{
        await HomePage.searchForText(testData.searchText);
        await expect(await ResultsPage.resultsCounter).toBeDisplayed();
        await expect(await ResultsPage.firstResult(testData.searchText)).toBeExisting;
        
    });    */
})

