const express = require("express");
const app = express();

const PORT = 8080 || process.env.PORT;

let courses = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Java" },
  { id: 3, name: "Python" },
];

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Scaler Topics");
});

app.get("/about", (req, res) => {
  res.send("WE CREATE IMPACT ");
});
app.get("/contact", (req, res) => {
  res.send("contact us at https://www.scaler.com/academy ");
});

//Route parameter
// GET - to get all courses
app.get("/courses", (req, res) => {
  res.status(200).send(courses);
});
// GET - to get a specific course
app.get("/courses/:courseName", (req, res) => {
  let course = courses.find((c) => c.name === req.params.courseName);
  if (!course)
    res.status(404).send(`course you are looking for doesn't exists`);
  else res.status(200).send(course);
});

// POST
app.post("/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});

// PUT
app.put("/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id == req.params.id);
  if (!course) {
    res.status(404).send(`course doesn't exist`);
  }
  course.name = req.body.name;
  res.send(course);
});

// DELETE
app.delete("/courses/:id", (req, res) => {
  let deleteCourse = courses.find((c) => c.id === parseInt(req.params.id));
  if (!deleteCourse) {
    res.status(404).send("not found");
  }
  let index = courses.indexOf(deleteCourse);
  courses.splice(index, 1);
  res.send(deleteCourse);
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
