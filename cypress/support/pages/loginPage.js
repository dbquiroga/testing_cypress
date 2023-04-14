export class LoginPage{
    
    constructor(){
        this.usuarioInput = '#user';
        this.usuarioPass = '#pass';
        this.loginBtn = '#submitForm';

    }

    escribirUsuario(usuario){
        cy.get(this.usuarioInput).type(usuario)
    }

    escribirPass(pass){
        cy.get(this.usuarioPass).type(pass)
    }

    clickLogIn(){
        cy.get(this.loginBtn).click()
    }
};