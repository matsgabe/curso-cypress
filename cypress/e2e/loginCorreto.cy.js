describe("Página de login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("Deve preencher os campos do formulário corretamente e realizar login", () => {

    // vincula os dados de user
    cy.get('[data-test="loginUserName"]').type('matsgabe');

    // vincular os dados de senha
    cy.get('[data-test="loginPassword"]').type('matsgabe123');

    // clica em login
    cy.get('[data-test="loginBtn"]');
  });
});
