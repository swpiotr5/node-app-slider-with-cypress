describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Responsive Swiper Gallery Test', function () {
  const devices = [
    { name: 'Macbook-16', width: 1536, height: 960 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'iPhone-12', width: 390, height: 844 }
  ];

  devices.forEach((device) => {
    it(`Checks gallery responsiveness on ${device.name}`, function () {
      cy.viewport(device.width, device.height);
      cy.visit('http://localhost:3000');

      cy.get('.swiper').should('be.visible');

      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-button-prev').should('be.visible').click();

      cy.get('.swiper-slide-active').should('exist');
    });
  });
});
