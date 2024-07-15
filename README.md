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

### Working the Repo.
Pull the front end down to your machine and change the WordPress URL to your backend site.
`npm run dev` to test it on your local machine and you should be able to push it to Vercel or Railway when you're finished making changes 

WordPress wise, you need to create a custom post type called Event Details (I used CPT UI from WebDevStudios), and make sure it can accept Custom Fields, as well as is exposed to GraphQL

Field Groups you need to makea new Group called Event Details and copy what I have done in the screenshot - I started with Date, Time and Location but you can add more if you like, and check to make sure Post Type is Equal to Event in the settings tab

That should be it! Have fun and enjoy breaking it!

![Screenshot 2024-07-15 at 8 02 52 PM](https://github.com/user-attachments/assets/c234bdf9-ddf1-4ffc-b824-9f08313f30a7)
![screencapture-dynamic-calendar-headless-local-wp-admin-post-php-2024-07-15-20_38_08](https://github.com/user-attachments/assets/6c422f09-96d7-475d-a3e5-55e43b4734b1)
