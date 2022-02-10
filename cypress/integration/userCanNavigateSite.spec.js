describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to render a greeting", () => {
    cy.get("[data-cy=greeting]").should("be.visible");
  });

  it('is expected to show a responsive menu', () => {
    cy.get("[data-cy=menu]").should("be.visible")
  });

  it('is expected to render three menu items when menu is clicked', () => {
    cy.get("[data-cy=menu]").click().within(() => {
      cy.get("data-cy=menu-items").should("have.length", 3)
    })
  });
});
