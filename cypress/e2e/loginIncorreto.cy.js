describe("pagina de login", () => {
  it("verificar mensagens do campo obrigatorio", () => {
    cy.visit("http://localhost:4200/");
    
    cy.contains("User name is required").should("be.visible");

    cy.contains("Password is required").should("be.visible");
  });
});
