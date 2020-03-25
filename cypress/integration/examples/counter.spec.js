context("Counter", () => {
  it("increment", () => {
    cy.visit("http://localhost:3000")
      .get(".sc-AxirZ > :nth-child(3)")
      .dblclick()
      .get("[data-testid=count]")
      .should(p => {
        expect(p.html()).equal("2");
      })
      .get(".sc-AxirZ > :nth-child(1)")
      .click()
      .get("[data-testid=count]")

      .should(p => {
        expect(p.html()).equal("1");
      })
      .get(".sc-AxirZ > :nth-child(4)")
      .click()
      .get("[data-testid=count]")

      .should(p => {
        expect(p.html()).equal("0");
      });
  });
  it("google", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf").type("test");
    cy.get(".FPdoLc > center > .gNO89b").click();
  });
});
