/// <reference types="cypress" />

describe('Calculus', () => {
  before(() => {
    cy.clearCookies({ domain: null })
    cy.visit('https://dashboard.outlier.org')
    console.log(Cypress.env('AUTH_USERNAME'), Cypress.env('AUTH_PASSWORD'));
  })

  context('Login', () => {
    it('should be on login page', () => {
      cy.location('hostname').should('eq', 'outlier.auth0.com')
    })

    it('should type email', () => {
      cy.get('[type="email"]').type(Cypress.env('AUTH_USERNAME'))
    })

    it('should type password', () => {
      cy.get('[type="password"]').type(Cypress.env('AUTH_PASSWORD'))
    })

    it('should click continue button', () => {
      cy.get('[type="submit"]').click()
    })
  })

  context('Select Course', () => {
    it('should click view all courses', () => {
      cy.contains('VIEW ALL')
        .click()
    })

    it('should click open calculus course', () => {
      cy.contains('Calculus I')
        .click()
    })
  })

  context('Visit First Chapter First Section', () => {
    it('should toggle chapter dropdown', () => {
      cy.get('.section-panel__wrapper')
        .children()
        .eq(1)
        .children()
        .find('[data-cy="chapterToggleBtn"]')
        .should('be.visible')
    })

    it('should open representing functions', () => {
      cy.get('[data-cy="sectionPanel"]')
        .then($chapterItem => {
          if (!$chapterItem.hasClass('show')) {
            cy.get('.section-panel__wrapper')
              .children()
              .eq(2)
              .children()
              .click()
          }
        })
      cy.get('p')
        .filter(':contains("1.1 Representing Functions")')
        .click()
    })

    it('should be on first chapter', () => {
      cy.hash()
        .should('eq', '#/29eff768-bf39-44d5-8af3-df5f5e122f9b')
    })
  })

  context('Practice Exercises', () => {
    it('should open practice exercises', () => {
      cy.get('[data-cy="sectionListExerciseItem"]')
        .eq(3)
        .next()
        .then(($content) => {
          if (!$content.hasClass('show')) {
            cy.get('[data-cy="sectionListExerciseItem"]')
              .eq(3)
              .click()
          }
        })
      cy.get('[data-cy="activitiesWrapper"]')
        .children()
        .eq(0)
        .find('button')
        .click()
    })

    it('should have practice exercise heading', () => {
      cy.get('#breadcrumb-container')
        .children()
        .eq(1)
        .should('contain', 'Practice Exercises')
    })

    it('should start practice exercise', () => {
      cy.get('[data-cy="beginButton"]')
        .click()
    })

    for (let i = 1; i <= 5; i++) {
      it(`should enter answer ${i}`, () => {
        cy.get('.wrs_editor.wrs_animated input[type=text]')
          .type(i, {
            force: true
          })
      })

      it(`should check answer ${i}`, () => {
        cy.get('[data-cy="checkOrSubmitButton"]')
          .click({
            force: true
          })
      })

      it('should click next', () => {
        cy.get('[data-cy="nextButton"]')
          .click({
            force: true
          })
      })
    }
  })

  context('Logout', () => {
    it('should click on dropdown', () => {
      cy.window().scrollTo('top')
      cy.get('#dropdownMenuOffset')
        .click()
    })

    it('should click logout', () => {
      cy.get('[href="#logout"]')
        .click()
    })

    it('should be on login page', () => {
      cy.location('hostname').should('eq', 'outlier.auth0.com')
    })
  })
})
