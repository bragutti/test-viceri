Cypress.Commands.add('login', (company, username, password) => {
    if(company){
        cy.get('#tenancyname').clear().type(company);
    }
    if(username){
        cy.get('#usuario').clear().type(username);
    }
    if(password){
        cy.get('#passwordLogin').clear().type(password);
    }
});

Cypress.Commands.add('visiblepassord', (passwordfield, togllebutton) =>{
    cy.get('#passwordLogin').should('have.attr', 'type', 'password');
    cy.get('#eyeClose').click();
    cy.get('#passwordLogin').should('have.attr', 'type', 'text');
    cy.get('#eyeOpen').click();
    cy.get('#passwordLogin').should('have.attr', 'type', 'password');
})
Cypress.Commands.add('verifyhavevalue', (company, username, password) => {
    if(company){
        cy.get('#tenancyname').should('not.have.value', '')
    }
    if(username){
        cy.get('#usuario').should('not.have.value', '')
    }
    if(password){
        cy.get('#passwordLogin').should('not.have.value', '')
    }
});