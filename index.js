// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

// Create function to return object
async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  let db = await central(id);
  let [info, secure] = await Promise.all([dbs[db], vault(id)]);
  return { id, ...info, ...secure };
}

// Logs data
(async () => {
  const time = new Date().getTime();
  console.log(await getUserData(2));
  console.log("processed in: ", new Date().getTime() - time, "ms");
})();
