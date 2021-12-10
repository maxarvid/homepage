describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a greeting", () => {
    cy.get("[data-cy=greeting]").should("be.visible");
  });
});
