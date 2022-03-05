
describe('Creating a new task', () => {
  it('Displays the new task', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="new-todo-input"]')
      .type('New Task');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="new-todo-input"]')
      .should('have.value', '');

    cy.contains('New Task');
  });
});
describe('Editing a existing task',()=>{
  it('Display the edited task',()=>{
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="todo-0edit"]')
    .click();

    cy.get('[data-testid="todo-0editText"]')
      .type('New Task Edit');

    cy.get('[data-testid="todo-0save"]')
      .click();

    cy.contains('New Task Edit');
  });
});
describe('Deleting a existing task',()=>{
  it('Should not display the deleted task',()=>{
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="todo-1delete"]')
      .click();

    cy.get('[data-testid="todo-2"]').should("not.exist");
  });
});
describe('Checking out a task should be in completed tab',()=>{
  it('Should display the checked task in completed tab',()=>{
    cy.visit("http://localhost:3000")

    cy.get('[data-testid="todo-1checkbox"]')
      .click();
    cy.get('[data-testid="Completed"]')
      .click();
    cy.contains('Sleep');
  });
});
describe('Unchecked tasks should be in the Active tab',()=>{
  it('Should display the unchecked tasks in active tab',()=>{
    cy.visit("http://localhost:3000")

    cy.get('[data-testid="Active"]')
      .click();
    cy.contains('Sleep');

  });
});
