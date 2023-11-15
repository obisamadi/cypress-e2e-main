import { When, Then, Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the app url', () => {
  cy.visit(Cypress.env('appUrl'))
})

Given('I visit the google', () => {
  cy.visit('https://www.google.com/')
  cy.viewport(1920, 1080);
})

Then("I enter 'Bellagio' in search box", () => {
  cy.xpath("//textarea[@type='search']").type("Bellagio")
})

Then("I click On 'Google Search'", () => {
  cy.contains("Google Search").click();
})

Then("I click On 'Bellagio - MGM Resorts'", () => {
  cy.contains("Bellagio - MGM Resorts").click();
  cy.wait(5000);
})

Then("I click On 'Book Now'", () => {
  cy.xpath("(//a[contains(@href,'bookaroom')])[last()]").should("exist").scrollIntoView().click();
  cy.wait(25000);
})

Then("I select '24' check in date", () => {
  cy.xpath("//td[contains(@aria-label,'November 24')]").should("exist").first().click({force:true});
  cy.wait(9000);
  
})

Then("I select '26' check out date", () => {
  cy.xpath("//td[contains(@aria-label,'November 26')]").should("exist").first().click({force:true});
  cy.wait(5000);
})

Then("I click On 'Next'", () => {
  cy.xpath("(//button[@aria-label='Close'])[1]").click();
  cy.contains("Next").should("exist").click();
  
})

Then("I click On 'No Thanks'", () => {
  cy.contains("No Thanks").should("exist").click();
  
})

Then("I click On 'Add to Cart'", () => {
  cy.xpath("(//span[text()='Add to Cart']//parent::button)[1]").should("exist").click();
  
})

Then("I click On 'Check Out'", () => {
  cy.xpath("//span[text()='Check Out']//parent::button").should("exist").click();
  
})

Then("I click On 'Proceed to Payment'", () => {
  cy.xpath("//button[@aria-label='Proceed to Payment']").should("exist").click();
  
})

Then("I enter the 'Payment Details'", () => {
  cy.contains("Payment Information").should("exist");
  cy.readFile('cypress/fixtures/data.json').then((data) => {
    cy.xpath("//input[@id='firstName']").type(data.firstname);
    cy.xpath("//input[@aria-labelledby='lastName__label']").type(data.lastname);
    cy.xpath("//input[@id='email']").type(data.email);
    cy.xpath("//input[@id='phoneNumber']").type(data.phone);

    cy.xpath("//input[@id='cardName']").type(data.card_firstname);
    cy.xpath("//input[@id='cardNumber']").type(data.card_cardnumber);
    cy.xpath("//input[@id='cardCVV']").type(data.card_cvv);
    cy.xpath("//input[@id='cardExpirationMonth']").type("1");
    cy.xpath("//input[@id='cardExpirationYear']").type("2024");
    cy.xpath("//img[@alt='Visa']").click();

    cy.xpath("//input[@id='billingAddressLine1']").type(data.bill_address);
    cy.xpath("//input[@id='billingCity']").type(data.bill_city);
    cy.xpath("//input[@id='billingState']").type("Louisiana")
    cy.xpath("//input[@id='billingZipCode']").type("58098")
    cy.xpath("//input[@id='billingCountry']").type("United States");
    cy.xpath("//span[@data-testid='termsAndConditions']").click({force:true})
  })
  
})

Then("I click On 'Complete Purchase'", () => {
  cy.contains("Complete Purchase").should("exist").click();
})






















When("I see the 'Bellagio' in header", () => {
  cy.contains('Bellagio').should('be.visible')
})


Then("I select 'Check in Date'", () => {
  cy.xpath("//label[contains(text(),'Check-in')]").click();
  cy.wait(4000);
  cy.xpath("//td[text()='23']").click();
  cy.wait(4000);
  cy.xpath("//td[text()='25']").click()
})

Then("I click On 'Find Rooms' button", () => {
  cy.xpath("//button[text()='Find Rooms']").click();
})

Then("I wait to load page", () => {
  cy.wait(10000);
  cy.contains("Please wait while we check").should('not.exist', { timeout: 50000 });
})

Then("I click on 'Book Now' button", () => {
  cy.contains('Book now').should('exist').click()
})

Then("Then I verify 'Your Booking summary' Table Right Side", () => {
  cy.contains('Your Booking summary').should('exist').click()
})



Then("I enter the 'Guest' Information", () => {
  cy.contains("Confirm your booking").should('exist', { setTimeout: 50000 })
  cy.readFile('cypress/fixtures/data.json').then((data) => {
    cy.xpath("//input[@placeholder='First Name']").type(data.firstname);
    cy.xpath("//input[@placeholder='Last Name']").type(data.lastname);
    cy.xpath("//input[@name='email']").type(data.email);
    cy.xpath("//input[@name='phone']").type(data.phone);
  })

})

Then("I enter the 'Guest Billing Address'", () => {

  cy.readFile('cypress/fixtures/data.json').then((data) => {
    cy.xpath("//input[@name='bill_address']").type(data.bill_address);
    cy.xpath("//input[@name='bill_city']").type(data.bill_city);
    cy.xpath("//input[@name='bill_zip']").type(data.bill_zip);
  })



})

Then("I enter the 'Guest Card Details'", () => {
  cy.contains("Confirm your booking").should('exist', { setTimeout: 50000 })


  cy.readFile('cypress/fixtures/data.json').then((data) => {
    cy.xpath("//input[@name='bill_first']").type(data.card_firstname);
    cy.xpath("//input[@name='bill_last']").type(data.card_lastname);
    cy.xpath("//input[@name='credit_card_number']").type(data.card_cardnumber);
    cy.xpath("//input[@name='credit_card_verification']").type(data.card_cvv);
  })




  cy.xpath("//button[@id='cc_brand']").click()
  cy.contains("Visa").should('exist').click()

  cy.xpath("//button[@id='cc_expyear']").click()
  cy.contains("2030").should('exist').click()

  cy.xpath("//button[@id='cc_expmonth']").click()
  cy.contains("01 - Jan").should('exist').click()

})

Then("I click on 'Complete Reservation' button", () => {
  cy.contains("Complete reservation").should('exist', { setTimeout: 50000 })
  cy.xpath("//button[@type='submit']").click()
})

Then("I verify Validation Message 'Credit card number or card holder data is incorrect.'", () => {
  cy.contains("Credit card number or card holder data is incorrect.").should('exist', { setTimeout: 50000 })
})

Then("I verify Validation Message 'Please correct the information or try a different credit card.'", () => {
  cy.contains("Please correct the information or try a different credit card.").should('exist', { setTimeout: 50000 })
})
