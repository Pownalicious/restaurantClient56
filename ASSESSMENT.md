### 7. Finishing up

- Self assess:
  - Make a file called `ASSESSMENT.md`
  - Copy the rubric below into it
  - Score your assessment in the column `Self`
  - Leave room for the evaluator to fill in the `Evaluator` column
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your repository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |
| Student has regularly committed changes (at least 1 commit per feature)    | 1      |
| Student has written clear commit messages                                  | 1      |
| Total                                                                      | 6      |

### Self assessment

| Section                         | Max Points | Self  | Evaluator |
| ------------------------------- | ---------- | ----- | --------- |
| 0 Migrations, models & seeds    | 8          | 8/8   | 0/8       |
| 1 Display reservations          | 10         | 10/10 | 0/10      |
| 2 Making a reservation          | 7          | 7/7   | 0/7       |
| 3 Logging in as admin           | 6          | 6/6   | 0/6       |
| 4 Displaying reservations admin | 5          | 5/5   | 0/5       |
| 5 Cancelling reservations       | 6          | 6/6   | 0/6       |
| 6 Blocking users                | 12         | 12/12 | 0/12      |
| 7 Finishing up                  | 6          | 6/6   | 0/6       |
| Total                           | 60         | 0/60  | 0/60      |

| 0 Migrations, models & seeds - Criteria                                                    | Points | Self | Evaluator |
| ------------------------------------------------------------------------------------------ | ------ | ---- | --------- |
| Server contains sequelize models and migrations for Table and Reservation                  | 2      | 2    |           |
| Records aren't allowed to be created if the fields marked as required contain empty values | 2      | 2    |           |
| User, Table and Reservation models are correctly related                                   | 2      | 2    |           |
| Seeders are present to create at least 4 tables and 6 reservations                         | 2      | 2    |           |
| Total                                                                                      | 8      | 8    |           |

| 1 Display reservations - Criteria                                                                        | Points | Self | Evaluator |
| -------------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| The frontend route `/` contains an input of type `date`, the default value for the field is always today | 2      | 2    |           |
| Tables of the restaurant are displayed with id, and number of seats                                      | 2      | 2    |           |
| Redux is used to manage the data                                                                         | 2      | 2    |           |
| Reserved tables show up as red, available tables as green for the date currently selected                | 2      | 2    |           |
| Only the data for the currently selected date is fetched, not all reservations                           | 2      | 2    |           |
| The data is fetched form the server, but the user cannot see which tables are reserved                   | -1     |      |           |
| The reservation data fetched from the server contains email addresses or names of users                  | -1     |      |           |
| Total                                                                                                    | 10     | 10   |           |

| 2 Making a reservation - Criteria                                                                    | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| On frontend route `/` logged in users see a button on each unreserved table with `reserve table`     | 1      | 1    |           |
| Users who are not logged in see a link with `login to reserve` which links to `/login`               | 1      | 1    |           |
| The request makes use of JWT Authorization                                                           | 1.5    | 1.5  |           |
| Clicking the button creates a reservation for that table by the logged in user for the selected date | 2.5    | 2.5  |           |
| When the reservation is successful a success message is shown to the user                            | 1      | 1    |           |
| A userId is sent in the body of the request, the userId is not determined using the token            | -1     |      |           |
| Clicking the reserve table button crashes your app                                                   | -2     |      |           |
| The success message is an alert, confirm or prompt popup or console.log                              | -0.5   |      |           |
| Total                                                                                                | 7      | 5.5  |           |

| 3 Logging in as admin - Criteria                                                                               | Points | Self | Evaluator |
| -------------------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| A separate migration is created to add a columns `isAdmin` and `accountBlocked` to our users table             | 3      | 0    |           |
| A user with username `ad@min.com` and password `admin` is seeded into the database with `isAdmin: true`        | 0.5    | 0.5  |           |
| A user with username `blo@ck.com` and password `block` is seeded into the database with `accountBlocked: true` | 0.5    | 0.5  |           |
| There is are links with `View Reservations` and `Manage Users` in the navbar                                   | 0.5    | 0.5  |           |
| A user can only see this link if he is an Admin                                                                | 1      | 1    |           |
| Clicking the links sends the user to `/admin/reservations` & `/admin/users` respectively                       | 0.5    | 0.6  |           |
| Total                                                                                                          | 6      | 6    |           |

| 4 Displaying reservations admin - Criteria                                                                 | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Reservations are displayed with date, tableId, email & name of the user who made the reservation           | 1      | 1    |           |
| Reservations are sorted by date                                                                            | 1      | 1    |           |
| An Authorization header is set in the request                                                              | 0.5    | 0.5  |           |
| The auth middleware is used on the server side to authorize the request                                    | 0.5    | 0.5  |           |
| An additional check is made on the server side to see if the user who made the request has `isAdmin: true` | 1      | 1    |           |
| Without `isAdmin: true`, the server should refuse & respond with an appropriate status code                | 1      | 1    |           |
| An `isAdmin` is sent in the body of the request, the `isAdmin` is not determined using the token           | -1     |      |           |
| Total                                                                                                      | 5      | 5    |           |

| 5 Cancelling reservations - Criteria                                                                               | Points | Self | Evaluator |
| ------------------------------------------------------------------------------------------------------------------ | ------ | ---- | --------- |
| A `cancel` button is present next to each reservation. This button should cancel (delete) the selected reservation | 3      | 3    |           |
| The request makes use of JWT Authorization                                                                         | 0.5    | 0.5  |           |
| An additional check is made on the server side to see if the user who made the request has `isAdmin: true`         | 1      | 1    |           |
| The reservation is removed from the `/admin/reservations` page without manually refreshing (CMD + R / CTRL + R)    | 1.5    | 1.5  |           |
| Clicking `cancel` crashes the app                                                                                  | -2     |      |           |
| An `isAdmin` is sent in the body of the request, the `isAdmin` is not determined using the token                   | -1     |      |           |
| Total                                                                                                              | 6      | 6    |           |

| 6 Blocking users - Criteria                                                                                    | Points | Self | Evaluator |
| -------------------------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| On the `/admin/users` page, all users are displayed with their name and email                                  | 1      | 1    |           |
| Next to each user there is `block` or `unblock` button, depending on the status of their account               | 2      | 2    |           |
| These button sends an authorized request to update the status of the selected user account                     | 2      | 2    |           |
| An additional check is made on the server side to see if the user who made the request has is an Admin         | 1      | 1    |           |
| Users with their accounts blocked should not be able to login anymore                                          | 2      | 2    |           |
| Users with `accountBlocked: true` see a message in the frontend informing them their account is accountBlocked | 2      | 2    |           |
| Thunk action and backend route are reused for this 2 functionalities, not duplicated                           | 2      | 2    |           |
| Clicking `block` deletes users from the database                                                               | -1     |      |           |
| Clicking `block` crashes the app                                                                               | -2     |      |           |
| An `isAdmin` is sent in the body of the request, the `isAdmin` is not determined using the token               | -1     |      |           |
| Total                                                                                                          | 12     | 12   |           |

| 7 Criteria - Finishing up                                                  | Points | Self | Evaluator |
| -------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      | 2    |           |
| Student can reflect on their process by writing a reflection of ~200 words | 2      | 2    |           |
| Student has regularly committed changes (at least 1 commit per feature)    | 1      | 1    |           |
| Student has written clear commit messages                                  | 1      | 1    |           |
| Total                                                                      | 6      | 6    |           |
