
describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.get('#registertoggle').scrollIntoView().should('be.visible')
        cy.xpath("//span[starts-with(@id,'reg')]").dblclick();
        cy.wait(5000);
        cy.xpath('/html/body/div[1]/div/div/div/form/div[1]/input').type(`pushingit`);
        cy.xpath('//input[contains(@type,"pass")]').type('123456!');
        cy.xpath('//button[@id="submitForm"]').click();
        cy.wait(5000);
        cy.xpath('//a[starts-with(text(),"To Do")]').click();
        cy.get("input[id$='sk']").type("tarea 1");
        cy.xpath('//button[@id="sendTask"]').click();
        cy.xpath('//p[contains(text(),"tarea 1")]').click();
    });
});
