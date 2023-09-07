describe("Almosafer Hotel Search Test", () => {
    beforeEach(() => {
      cy.visit(getRandomAlmosaferURL());
    });
  
    it("should perform hotel search", () => {
        cy.get('.cta__saudi').click();
        cy.get('#uncontrolled-tab-example-tab-hotels').click();
        const location = getRandomLocation();
        cy.log(`Selected location: ${location}`);
        cy.get('[data-testid="AutoCompleteInput"]').type(location, { force: true });
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();
    });
  
    function getRandomAlmosaferURL() {
      const randomLanguage = getRandomLanguage();
      return `https://www.almosafer.com/${randomLanguage}`;
    }
  
    function getRandomLanguage() {
      return Math.random() < 0.5 ? "ar" : "en"; 
    }
  
    function getRandomLocation() {
      const lang = getRandomLanguage();
      const locations = lang === "ar" ? ["دبي", "جدة"] : ["Dubai", "Jeddah", "Riyadh"];
      const randomIndex = Math.floor(Math.random() * locations.length);
      cy.log(`Selected language: ${lang}`);
      cy.log(`Available locations: ${locations.join(", ")}`);
      return locations[randomIndex];
    }
});
