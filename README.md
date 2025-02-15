
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fiamsam2e%2FHeadless-Events-Calendar-PoC&env=REACT_APP_GRAPHQL_URI,EMAIL_HOST,EMAIL_PORT,EMAIL_USER,EMAIL_PASS,SITE_OWNER_EMAIL&demo-title=Headless%20Event%20POC%20with%20ACF&demo-url=https%3A%2F%2Fheadless-events-calendar-po-c.vercel.app%2F)

## What is this?
This is a proof of concept I have built to sort of look at alternative things you can build with Headless WordPress - using the right tools and knowledge you can build something that is pretty usable off the shelf to replace something like The Events Calendar in normal WordPress

## What could this be used for?
Ideally inspriation, a stepping off point or a scaffold for certain sites. Small projects that need a calendar to show dates, like a small town site, or something like intricate booking forms or customer based events that need to be managed by a team.

With ACF at its core, you can really do whatever you need

## How to use this
### Plugins
ACF (preferably ACF Pro)
Custom Post Type UI
WP GraphQL
WP GraphQL for ACF
Optional -> WP GraphQL Smart Cache for later on

### Email form Submission
You will need to create a .env file in the front end of the repo with the following fields:
EMAIL_HOST=smtp.fastmail.com
EMAIL_PORT=587
EMAIL_USER=hello@samtoohey.xyz
EMAIL_PASS=yourpassword
SITE_OWNER_EMAIL=hello@samtoohey.xyz

I have some as an example above using Fastmail but I have tested this also with gmail, so you should have it able to work with most smtp providers. 

### Working the Repo.
Pull the front end down to your machine and change the WordPress URL to your backend site.
`npm run dev` to test it on your local machine and you should be able to push it to Vercel or Railway when you're finished making changes 

WordPress wise, you need to create a custom post type called Event Details (I used CPT UI from WebDevStudios), and make sure it can accept Custom Fields, as well as is exposed to GraphQL

Field Groups you need to makea new Group called Event Details and copy what I have done in the screenshot - I started with Date, Time and Location but you can add more if you like, and check to make sure Post Type is Equal to Event in the settings tab


That should be it! Have fun and enjoy breaking it!

![Screenshot 2024-07-15 at 8 02 52 PM](https://github.com/user-attachments/assets/c234bdf9-ddf1-4ffc-b824-9f08313f30a7)
![screencapture-dynamic-calendar-headless-local-wp-admin-post-php-2024-07-15-20_38_08](https://github.com/user-attachments/assets/6c422f09-96d7-475d-a3e5-55e43b4734b1)
