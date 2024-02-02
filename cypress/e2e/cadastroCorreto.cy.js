describe('pagina de cadastro', () => {
  it('preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit("http://localhost:4200/")
    cy.get('[data-test="register"]').click();

    cy.get('[data-test="email"]').type('matsgabe@email.com.br')
    cy.get('[data-test="fullName"]').type("Matheus Gabriel");
    cy.get('[data-test="registerUserName"]').type("matsgabe");
    cy.get('[data-test="registerPassword"]').type("matsgabe123");

    cy.get('[data-test="btnRegister"]').click();
  })
})