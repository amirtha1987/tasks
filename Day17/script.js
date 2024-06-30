const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 3000);
});
prom
  .then((response) => {
    console.log("Response", response);
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("All promises Resolved");
  });
