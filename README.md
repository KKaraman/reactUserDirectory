# reactUserDirectory
https://user-images.githubusercontent.com/68077734/101436948-c688ac00-38d4-11eb-980d-1ab93325dca0.png

The image shows 2 of the 10 identical cards that show up when you launch the react page. The 10 images are gathered from the RandomAPI call and are updated everytime the page is refreshed.

## User Story
As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information. All the employees have their non-sensitive placed on cards.

## Business Context
An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria
Given a table of random users generated from the Random User API, when the user loads the page, a table of employees should render.

## Functionality
Sort the table by at least one category - The cards can be sorted by first name by clicking the sort at the bottom of the card.
Filter the users by at least one property. - When you click find nationalities at the bottom of the card, the app finds all users from the same nationality.
It is important to note that if you do the filter, it will show only those cards but they will all change when you refresh page. This is due to the fact that we are making an API call everytime the page refreshes. However, this was not an issue when I had a JSON file that had all the employees and did not change which would be more realistic in a real world application so I do not think this would be considered a bug.

## Questions
For more information please contact me using my email.

The link for the react directory repo can be found here.

If you liked this, you can see my other repositories at my GitHub profile.
