
/// <reference types="cypress" />
describe("Primer Desafio", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Completar tarea exitosamente', ()=>{
        cy.visit('');
        cy.get('#user').type(`day${numero}`);
        cy.get('#pass').type(`123456!`);
        cy.get('#user').clear();
        cy.get('#pass').clear();
        cy.get('#user').type(`day${numero}`);
        cy.get('#pass').type('123456!',{log:false});
        cy.get("[value='Female']").check({force:true});
        cy.get('#day').select(13);
        cy.get('#month').select('September');
        cy.get('#year').select(72);
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click();
        cy.get('#task').type('Hacer el primer desafío de Pushing It');
        cy.get('#sendTask').click();
        cy.contains('Hacer el primer desafío de Pushing It').click()
    });
});
