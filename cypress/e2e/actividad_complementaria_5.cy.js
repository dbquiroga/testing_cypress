/// <reference types="cypress" />

describe('Actividad complementaria 5', () => { 
    const timeout = 10000;
    
     beforeEach("Precondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

  	it("Deberia validad la primera espera", () =>{
			// Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
            cy.get('#wait', {timeout:10000}).should('have.text', 'Button')

	})
  
    it("Deberia validad la primera espera", () =>{
            cy.get('#wait').siblings('p').eq(1).should('have.text','Wait 5 more seconds');
			// verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')

    })
  
    it.only("Deberia validad la primera espera", () => {
			// Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
            cy.get('#message', {timeout: 100000}).should('have.text','You are a man of patience and have waited fifteen seconds');

    })
 })