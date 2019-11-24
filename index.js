"use strict";

const express = require("express");
const { getPairs } = require("./getPairs");
const { sayHi } = require("./sendMail");

const port = process.env.PORT || 42069;
const app = express();

app.use(express.json());

const exampleObject = {
  people: [
    {
      name: "Cameron",
      email: "Cameron@camerongreens.com"
    },
    {
      name: "Curtis",
      email: "curtis@curtisgreens.com"
    },
    {
      name: "Carson",
      email: "carson@carsongreens.com"
    },
    {
      name: "Colton",
      email: "colton@coltongreens.com"
    }
  ]
};
app.get("/healthcheck", (req, res) => res.send("Healthy"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const people = req.body.people;
  const pairs = getPairs(people);
  sayHi();
  // sendEmails(pairs)
  res.status(200).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
