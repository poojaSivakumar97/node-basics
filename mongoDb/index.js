const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/testDb")
  .then((res) => {
    console.log(`MongoDb connected Successfully !`);
  })
  .catch((e) => {
    console.error(`Could not connect to mongoDb ,${e}`);
  });

//   schema
const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  publishedDate: { type: Date, default: Date.now },
  isPublished: Boolean,
});

//   model
const Course = mongoose.model("Course", courseSchema);

// data entry
async function addCourse() {
  const course = new Course({
    name: "DBMS",
    creator: "Ishan",
    isPublished: false,
  });

  const result = await course.save();
  console.log(result);
}

addCourse();
