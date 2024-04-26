/// <reference types="cypress" />

describe("Sessions page", () => {
  
  // Run before each test in the describe block
  beforeEach(() => {
    cy.clickViewSessions()
    cy.url().should("include", "/sessions");

    // Define aliases here
    cy.dataCy("AllSessions").as("AllSessionsBtn")
    cy.dataCy("Wednesday").as("WednesdayBtn")
    cy.dataCy("Thursday").as("ThursdayBtn")
    cy.dataCy("Friday").as("FridayBtn")
  })

    it("should navigate to conference sessions page and view day filter buttons", () => {
      
      // validate that buttons to filter by day exists
      cy.get("@AllSessionsBtn")
      cy.get("@WednesdayBtn")
      cy.get("@ThursdayBtn")
      cy.get("@FridayBtn")
    });

    it("should filter sessions and only display Wednesday sessions when Wednesday button is clicked", () => {
      
      // cy.intercept("POST", "http://localhost:4000/graphql").as("getSessionInfo");
      // cy.get("@WednesdayBtn").click();
      // cy.wait("@getSessionInfo");

      cy.dataCy("day").should("have.length", 21)
      cy.dataCy("day").contains("Wednesday").should("be.visible")
      cy.dataCy("day").contains("Thursday").should("not.exist")
      cy.dataCy("day").contains("Friday").should("not.exist")

    })

    it("should filter sessions and only display Thursday sessions when Thursday button is clicked", () => {
      
      cy.intercept("POST", "http://localhost:4000/graphql").as("getSessionInfo")
      cy.get("@ThursdayBtn").click()
      cy.wait("@getSessionInfo")

      cy.dataCy("day").contains("Thursday").should("be.visible")
      cy.dataCy("day").contains("Wednesday").should("not.exist")
      cy.dataCy("day").contains("Friday").should("not.exist")

    })

    it("should filter sessions and only display Friday sessions when Friday button is clicked", () => {
      
      cy.intercept("POST", "http://localhost:4000/graphql").as("getSessionInfo")
      cy.get("@FridayBtn").click()
      cy.wait("@getSessionInfo")

      cy.dataCy("day").contains("Friday").should("be.visible")
      cy.dataCy("day").contains("Thursday").should("not.exist")
      cy.dataCy("day").contains("Wednesday").should("not.exist")

    })
  });
  