# Description
This application renders a single page application on a web browser and fetches data from a backend rails API. The user is able to create a note with a title and body and post it to be viewed at the bottom of the page. The user can then add tags to any already posted note to better categorize or identify it. The user may also choose delete either tags or notes.

# Install Instructions
In your terminal, move to the /backend directory and run "$ bundle install" to download and install all the supporting gems.

Backend:
- Run the schema migrations: From the /backend directory, run "$ rails db:migrate" to run all the migration scripts.
- OPTIONAL: Add some basic seed data to the database: From the /backend directory, run "$ rails db:seed".
- Run the rails server: From the /backend directory, run your rails server on port 3000 by running "$ rails server"

Frontend:
- Open the index.html in any browser.

# Contributors Guide
If you have any ideas on how to improve this app or may have found a bug, your contributions are more than welcome. Please just follow the typical git workflow.

1. Fork this repo.
2. Update your fork with the edits. And provide descriptive commit messages.
3. Open a Pull Request against this repo.

I will gladly review the request and consider your suggestion. Thanks a ton! :)