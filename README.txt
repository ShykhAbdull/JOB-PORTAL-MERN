--------------  FLOW TO START APPLICATION-----------------

--> Start off by connecting MongoDB using "mongodb://localhost:27017/jobportalfyp" as seen in config file

--> If not Automatically connected, then Manually connect by openeing CMD as Administrator and 
write :

<--  cd "C:\Program Files\MongoDB\Server\7.0\bin"   -->

--> Once new directory is opened simply paste :

<--   mongod.exe --config "C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg"   -->

while the terminal opens mangodb manually you can goto MongoDb Compass and again try to connect using

"   mongodb://localhost:27017/jobportalfyp    "

--> Once Connected and DB be seen simply don't close the terminal and  go the backend path and write " cmd" to open another terminal and then write "npm install" (If first time) otherwise simply write "npm run dev" then wait for the "Connect to database" message in the terminal

--> Do the same thing for frontend and run "npm run dev" after npm i and your CRUD fullstack application is good to go




