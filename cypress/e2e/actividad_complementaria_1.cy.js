/// <reference types="cypress" />
describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type(`day${numero}`);
        cy.get('#pass').type(`123456!`);
        cy.get('#pass').clear();
        cy.get('#user').type(`day${numero}`);
        cy.get('#pass').type('123456!',{log:false});
        cy.get("[value='Female']").check({force:true});
        cy.get('#day').select(13);
        cy.get('#month').select('September');
        cy.get('#year').select(72);
        cy.get('#submitForm').click(); 
    });
});

