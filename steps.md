
upgrade app from spark to blaze plan in firebase

To create backend express
firebase init 
select functions

===
cd functions
firebase emulators:start
===
for front end 
npm start


=============
firebase deploy --only functions

removed predeploy lint script as its showing some issues 
npm --prefix "$RESOURCE_DIR" run lint

============
in Front end use this to deploy 
npm run build
firebase deploy --only hosting