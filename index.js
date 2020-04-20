// Dependencies, Variables, Constants, etc -------------------------------------------------------------------

const express = require("express");
const app = express();
const port = 3000;
const Gpio = require("onoff").Gpio;
const relay = new Gpio(14, "out");

let isOn = false;

// HELPERS -------------------------------------------------------------------

const log = (message) => {
  console.log(
    `${new Date(Date.now()).toDateString()} ${new Date(
      Date.now()
    ).toTimeString()}: ${message}`
  );
};

const setRelay = (value) => {
  if (typeof value === "number") {
    relay.writeSync(value);
  }
};

// CHECK TIME -------------------------------------------------------------------

const checkTime = () => {
  const hours = new Date().getHours();
  if (hours >= 8 && hours <= 19) {
    log("switching on");
    isOn = true;
    setRelay(1);
  } else {
    log("switching off");
    isOn = false;
    setRelay(0);
  }
};

// ROUTING -------------------------------------------------------------------

app.get("/", (req, res) => res.send(`Lights are: ${isOn ? "on" : "off"}`));

// START APPLICATION -------------------------------------------------------------------

app.listen(port, () => log(`Lights app listening at http://localhost:${port}`));
setRelay(0);
checkTime();
setInterval(checkTime, 5 * 1000);
