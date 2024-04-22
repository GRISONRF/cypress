/// <reference types="cypress" />

describe("Sessions page", () => {
    it("should navigate to conference sessions page and view day filter buttons", () => {
      cy.visit("/conference");
      cy.get("h1").contains("View Sessions").click();
      cy.url().should("include", "/sessions");

      // validate that buttons to filter by day exists
      cy.get("[data-cy=AllSessions]")
      cy.get("[data-cy=Wednesday]")
      cy.get("[data-cy=Thursday]")
      cy.get("[data-cy=Friday]")

    });

    it("should filter sessions and only display Wednesdar sessions when Wednesday button is clicked", () => {
      cy.get("[data-cy=Wednesday]").click()

      cy.get("[data-cy=day]").contains("Wednesday").should("be.visible")
      cy.get("[data-cy=day]").contains("Thursday").should("not.exist")
      cy.get("[data-cy=day]").contains("Friday").should("not.exist")

    })

    it("should filter sessions and only display Wednesdar sessions when Thursday button is clicked", () => {
      cy.get("[data-cy=Thursday]").click()

      cy.get("[data-cy=day]").contains("Thursday").should("be.visible")
      cy.get("[data-cy=day]").contains("Wednesday").should("not.exist")
      cy.get("[data-cy=day]").contains("Friday").should("not.exist")

    })

    it("should filter sessions and only display Wednesdar sessions when Friday button is clicked", () => {
      cy.get("[data-cy=Friday]").click()

      cy.get("[data-cy=day]").contains("Friday").should("be.visible")
      cy.get("[data-cy=day]").contains("Thursday").should("not.exist")
      cy.get("[data-cy=day]").contains("Wednesday").should("not.exist")

    })
  });
  