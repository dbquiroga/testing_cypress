describe('Actividad complementaria 7', () => { 
    let datosFixture;

    before('', () => {
        cy.fixture('data').then((newdata) =>{
            datosFixture = newdata
        })
    })

    beforeEach("Actividad complementaria 7", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick()
       cy.get('#user').type('pushingit')
       cy.get('#pass').type('123456!')
       cy.get('#submitForm').click()
       cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
       cy.contains('To Do List').click()
   })

     it("Deberia sacar una foto completa de la pagina del login", () =>{
       //agregar 3 tareas y sacar una foto a la pantalla completa
        cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`);
        cy.get('#task').type(`${datosFixture.tareas.tarea3} {enter}`);
        cy.screenshot('capture','fullPage')
   })
 
   it("Deberia sacar una foto del boton todoList ", () =>{
       //agregar 3 tareas y sacar una foto a las tareas (las 3 tareas en la misma foto)
       cy.get('#task').type(`${datosFixture.tareas.tarea1} {enter}`);
       cy.get('#task').type(`${datosFixture.tareas.tarea2} {enter}`);
       cy.get('#task').type(`${datosFixture.tareas.tarea3} {enter}`);
       cy.get('[role="list"]').screenshot()

   })
})

// Instalar git
// Inicializa un repositorio en github desde visual studio code
// Subi el repositorio completo. Recorda usar .gitignore para ignorar la carpeta node modules
// recorda usar los comandos git add (o usa visual studio code para elegir los archivos) // git commit -m "mensaje" // git push origin {nombre de tu branch}
// SI es la primera vez que usas git te va a pedir que pongas las credenciales y autorices github en el navegador
