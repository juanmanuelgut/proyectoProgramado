const HomePage = require('../pageobjects/home.page');
const ResultsPage = require('../pageobjects/results.page');

//Comment changed to test git

let testData = {searchText: 'María'}

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

   it('b. Al ingresar el texto María y hacer click en Buscar la página es refrescada y el primer resultado tiene el nombre María', async() =>{
        await ResultsPage.searchForText(testData.searchText);
        await expect(await ResultsPage.resultsCounter).toBeDisplayed();
        
    });   

    it('c. Al cambiar entre mapa y lista, el mapa desaparece de la pagina', async () => {
        await ResultsPage.clickBtnLista();
        await expect(ResultsPage.contenedorMapa).not.toBeDisplayed();
        await ResultsPage.clickBtnMapa();
        await expect(ResultsPage.contenedorMapa).toBeDisplayed();
    });
})

