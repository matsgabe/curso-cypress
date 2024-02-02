describe("pagina de cadastro", () => {
  it("preencher os campos do formulario de forma incorreta", () => {
    cy.visit("http://localhost:4200/");
    cy.get('[data-test="register"]').click();
    cy.get('[data-test="btnRegister"]').click();
    cy.get('[data-test="btnRegister"]').click();

    cy.contains('Email is required').should('be.visible');

    cy.contains("Full name is required").should("be.visible");

    cy.contains("User name is required").should("be.visible");

    cy.contains("Password is required").should("be.visible");
  });
});
 