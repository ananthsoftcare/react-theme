# Application to switch theme using React, NodeJs and MongoDB

MongoDB collections : https://github.com/ananthsoftcare/react-theme/blob/master/db/mongodb.txt

# Steps to follow:

1. git clone https://github.com/ananthsoftcare/react-theme.git

2. switch to directory 

3. cd server
   
   npm install
   
   npm run start
   
   Server link :  http://localhost:3000/ 
   
   to get user detail: http://localhost:3000/api/user/1
   
   to get theme detail : http://localhost:3000/api/theme/1
   
4. cd client

   npm install
   
   npm run start
   
   Client link : http://localhost:3001/


# Tasks:

1. Consider a Component has html/css/js pages. All the HTML/CSS/JS should load dynamically for component based on data in database.
Say Component A has 3 Themes – theme 1, theme 2, theme 3

   http://localhost:3001/ switch the user and the particular theme will be loaded depends upon user selection


2. If database of the user, has theme 3 for the page, then the user should see theme 3 for the particular user
Add OpenGraph MetaTags to website dynamically, such that all the data should come from db. When you share the link on any social media facebook/twitter, image i.e. loaded from database should be visible in share post.

   Please refer https://github.com/ananthsoftcare/react-share

3. Create one example component in which will share components (HTML/CSS/JS) with one other component in React.

   Dropdown (https://github.com/ananthsoftcare/react-theme/blob/master/client/src/components/common/dropdown.js) is the component can be shared with other components. Example (https://github.com/ananthsoftcare/react-theme/blob/master/client/src/components/theme.js#L50) 
