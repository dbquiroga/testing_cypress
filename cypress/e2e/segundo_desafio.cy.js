/// <reference types="cypress" />

describe('Suite To Do List', () =>{

    let datosFixture;

    before('', () => {
        cy.fixture('data').then((newdata) =>{
            datosFixture = newdata
        })
    })

    beforeEach('visitar page e ir a To Do List ', () => {
        cy.visit('/');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type(datosFixture.user.username);
        cy.get('#pass').type(datosFixture.user.password);
        cy.get('#submitForm').click();
        cy.wait(5000);
        cy.contains('To Do List').click();
    })

    it('Agregar 5 tareas', () => {
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea3} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea4} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea5} {enter}`);
    })

    it('Verificar existan btn', () => {
        cy.xpath("//button[@id='all']").should('exist');
        cy.get('#completed').should('exist');
        cy.contains('Active').should('exist');
        cy.get('button[id*="remove"]').should('exist');
    })

    it('Agregar 2 tareas, completar y eliminar la 2da tarea', () => {
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`);
        cy.contains('p','Tarea 2').click();
        cy.get('ul>li>div').eq(1).contains('button', 'Delete').click();
    })

    it('Agregar 2 tareas y eliminar la 1er tarea', () => {
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`);
        cy.get('ul>li>div').eq(0).contains('button', 'Delete').click()
    })

})