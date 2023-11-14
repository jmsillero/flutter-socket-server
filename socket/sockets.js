const { io } = require("../index");
const Band = require("./models/band");
const Bands = require("./models/bands");

const bands = new Bands();

bands.addBand(new Band("El Chulo pa"));
bands.addBand(new Band("Chocolate MC"));
bands.addBand(new Band("Kimiko y Yordi"));
bands.addBand(new Band("Payaso por Ley"));
bands.addBand(new Band("Mucho gusto mawell"));

console.log("Bands ->", bands);

//Socket messages
io.on("connection", (client) => {
  console.log("Client connected");
  refresh();

  client.on("disconnect", () => {
    console.log("Client disconnected");
  });

  client.on("message", (payload) => {
    console.log("Message", payload);

    client.broadcast.emit("new-message", payload);
  });

  client.on("vote-band", (payload) => {
    bands.voteBand(payload.id);
    refresh();
  });

  client.on("add-band", (payload) => {
    bands.addBand(new Band(payload.name));
    refresh();
  });

  client.on("remove-band", (payload) => {
    bands.deleteBand(payload.id);
    refresh();
  });
});

const refresh = () => {
  io.emit("active-bands", bands.getBands());
};
