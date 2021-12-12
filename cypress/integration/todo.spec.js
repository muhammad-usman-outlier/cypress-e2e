/// <reference types="cypress" />

describe('cypress test', () => {
  it('works', () => {
    expect(true).to.be.true
  })
  it('checks falsy', () => {
    expect(false).to.be.false
  })
})
