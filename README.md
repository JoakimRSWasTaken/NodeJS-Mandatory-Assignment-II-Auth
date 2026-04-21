## Den letteste måde at køre programmet:
1. Clone projektet
   - https://github.com/JoakimRSWasTaken/NodeJS-Mandatory-Assignment-II-Auth.git
   - git@github.com:JoakimRSWasTaken/NodeJS-Mandatory-Assignment-II-Auth.git
1. Åbn to terminalvinduer
2. I terminal 1 skal du blive i root folderen, i terminal 2 skal du `$ cd client`
3. I terminal 1, kør `$ node server/database/connection.js`
4. I terminal 1, kør `$ node server/database/createDatabase.js`.
   - Man kan køre `createDatabase.js` med enten `--delete` flag eller `--test` flag
   - `--delete` sletter det eksisterende data og skaber nyt
   - `--test` printer de eksisterende users til konsollen
6. I terminal 1, kør `$ node server/app.js` eller `$ nodemon server/app.js`
7. I terminal 2, kør `$ npm run dev`
8. Åbn `https://localhost:5173`
