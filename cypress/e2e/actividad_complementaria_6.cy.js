//importar la pagina todoListPage
//importar la pagina loginPage
import { ToDoListPage } from "../support/pages/tolistPage";
import { LoginPage } from "../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    //generar una instancia de la clase loginPage
    const todoListPage = new ToDoListPage();
    const loginPage = new LoginPage();
    let datosFixture;

        before('acceder al fixture', () => {
            cy.fixture('pushinit').then((datos) =>{
                datosFixture = datos
            })
        });
        
         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario(datosFixture.valid_username);// utilizar la clase loginPage para ingresar el usuario
            loginPage.escribirPass(datosFixture.password); // utilizar la clase loginPage para ingresar  la contraseña
            loginPage.clickLogIn(); // utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            cy.get(todoListPage.btnAll).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get(todoListPage.btnComplete).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get(todoListPage.btnActive).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get(todoListPage.btnRemoveAll).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
     });