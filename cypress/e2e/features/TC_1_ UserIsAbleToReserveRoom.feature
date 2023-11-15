Feature: Book a Room Reservation

  Scenario: As a user, I'm able to Search Bellagio
    Given I visit the google
    Then I enter 'Bellagio' in search box
    Then I click On 'Google Search'
    Then I click On 'Bellagio - MGM Resorts'
    Then I click On 'Book Now'
    Then I select '24' check in date
    Then I select '26' check out date
    Then I click On 'Next'
    Then I click On 'No Thanks'
    Then I click On 'Add to Cart'
    Then I click On 'Check Out'
    Then I click On 'Proceed to Payment'
    Then I enter the 'Payment Details'
    Then I click On 'Complete Purchase'



  Scenario: As a user, I'm able to reserve a Room
    Given I visit the app url
    When I see the 'Bellagio' in header
    Then I click On 'Find Rooms' button
    Then I wait to load page
    Then I click on 'Book Now' button
    Then Then I verify 'Your Booking summary' Table Right Side
    Then I enter the 'Guest' Information
    Then I enter the 'Guest Billing Address'
    Then I enter the 'Guest Card Details'
    Then I click on 'Complete Reservation' button
    Then I verify Validation Message 'Credit card number or card holder data is incorrect.'
    Then I verify Validation Message 'Please correct the information or try a different credit card.'

