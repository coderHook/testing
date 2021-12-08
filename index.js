const fs = require("fs");
const { parse } = require("csv-parse");

const habitablePlanetsssss = [];

function isHabitable(planet) {
  return (
    planet["koi_insol"] > 0.36 && planet["koi_disposition"] === "CONFIRMED"
  );
}
const test = fs
  .createReadStream("./soar_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitable(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.error(err);
  })
  .on("end", () => {
    console.log("FOUND: ", habitablePlanets.length);
  });

console.log({ test });
