describe('Testes Viceri', () => {
    beforeEach(() => {
        cy.visit('https://portalrdvqa.azurewebsites.net/');
    });

    it('Login bem-sucedido', () => {
        cy.login('SUPERA', '94781273220', '123qwe')
        cy.get('.btn').click()
        cy.url().should('include', '/dashboard');
    });
    it('Login com senha incorreta', () => {
        cy.login('SUPERA', '94781273220', '12314')
        cy.get('.btn').click()
        cy.get('.error').should('be.visible');
    })
    it('Login com nome de usuário incorreto', () => {
        cy.login('SUPERA', '1424141', '123qwe')
        cy.get('.btn').click()
        cy.get('.error').should('be.visible');
    })
    it('Login com Empresa incorreto', () => {
        cy.login('teste', '94781273220', '123qwe')
        cy.get('.btn').click()
        cy.get('.error').should('be.visible');
    })
    it('Login com senha não preenchido', () => {
        cy.login('SUPERA', '94781273220', '')
        cy.get('.btn').click()
        cy.get('.error').should('be.visible');
    })
    it('Login com nome de usuário não preenchido', () => {
        cy.login('SUPERA', '', '123qwe')
        cy.get('.btn').click()
        cy.get('.error').should('be.visible');
    })
    it('Login com Empresa não preenchido', () => {
        cy.login('', '94781273220', '123qwe')
        cy.get('.btn').click()
        cy.get('.error').should('be.visible');
    })
    it('Campos vazios', () => {
        cy.login('', '', '')
        cy.get('.error').should('be.visible');
    })
    it('Campo de senha visível/invisível', () =>{
        cy.get('#passwordLogin').clear().type('12341241');
        cy.visiblepassord();
    })
    it('Função "Lembrar" Click', () =>{
        cy.get('span > input').click().should('be.checked');
        cy.get('span > input').click().should('not.be.checked');
        cy.get('span > input').click().should('be.checked');

    })
    it('Função "Lembrar" Click', () =>{
        cy.get('span > input').click();
        cy.login('SUPERA', '94781273220', '123qwe')
        cy.get('.btn').click()
        cy.url().should('include', '/dashboard')
        cy.get('.dropdown', { timeout: 10000 }).should('exist').trigger('mouseover')
        cy.get('.dropdown').should('be.visible')
        cy.get('[ng-click="vm.limparCache()"]', { timeout: 10000 }).should('be.visible').click({force: true})
        cy.get('#tenancyname').should('not.have.value', '')
        cy.get('#usuario').should('not.have.value', '')
        cy.get('span > input').should('be.checked');
    })

   it('Esqueceu a senha?', () => {
    cy.login('SUPERA', '94781273220', '123qwe');
    cy.get('#forget-passwordlink').click();
    cy.get('.success').should('be.visible');
   })

   it('Esqueceu a senha? com Empresa não preenchido', () => {
    cy.login('', '94781273220', '123qwe');
    cy.get('#forget-passwordlink').click();
    cy.get('.sweet-alert').should('be.visible');
   })

   it('Esqueceu a senha? com Usuario não preenchido', () => {
    cy.login('SUPERA', '', '123qwe');
    cy.get('#forget-passwordlink').click();
    cy.get('.sweet-alert').should('be.visible');
   })

   it('Esqueceu a senha? com Usuario não cadastrado', () => {
    cy.login('SUPERA', 'AADA', '123qwe');
    cy.get('#forget-passwordlink').click();
    cy.get('.error').should('be.visible');
   })

   it('Suporte a múltiplos idiomas', () => {
    cy.get('.famfamfam-flag-es').click();
    cy.wait(2000);
    cy.get('.btn').should('contain', 'Iniciar sesión');

    cy.get('.famfamfam-flag-gb').click();
    cy.wait(2000);
    cy.get('.btn').should('contain', 'Log in');

    cy.get('.famfamfam-flag-br').click();
    cy.wait(2000);
    cy.get('.btn').should('contain', 'Entrar');

   })
})












