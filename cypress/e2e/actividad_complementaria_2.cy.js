//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('');
        cy.get('[cy-get="user"]').type(`pushingit${numero}`); 
        cy.get('input#user').clear()
        cy.get('[name="user"]').type(`pushingit${numero}`);
        cy.get('input#pass').type('123456!');
        cy.get('.chakra-radio').find('input').check({force:true});
        cy.get('[name="day"]').select('20');
        cy.get('[name="month"]').select('September');
        cy.get('#year').select(10);
        cy.contains('Register').click();
        cy.wait(5000);
    });
});