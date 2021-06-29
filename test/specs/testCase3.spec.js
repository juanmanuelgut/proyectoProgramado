const SpecialistPage = require('../pageobjects/specialist.page');

//Comment changed to test git
const testData = {url: 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6'}

describe('Pruebas de Perfil de profesional', () => {
    
    it('a. Navegar a la pagina del especilista debe llamar al webservice correcto.', async () => {
        var output = await browser.mock('**/specialist/**', {method: 'get'})
        await SpecialistPage.open()
        await (await SpecialistPage.titulo).waitForExist({timeout: 2000})
        console.log(output)
        await expect(output).toBeRequestedWith(testData)
    });   
});