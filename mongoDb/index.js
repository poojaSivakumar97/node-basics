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
  rating: Number,
});

//   model
const Course = mongoose.model("Course", courseSchema);

// data entry
async function addCourse() {
  const course = new Course({
    name: "DBMS",
    creator: "Kranthi",
    isPublished: false,
    rating: 3.8,
  });

  const result = await course.save();
  console.log(result);
}

// addCourse();

/** get a particular course or filter out courses based on condition */

async function getCourses() {
  const courses = await Course.find({ isPublished: true })
    .select({
      name: 1,
      publishedDate: 1,
    })
    .sort({ name: -1 }); // -1 means descending
  console.log(courses);
}
// getCourses();

// comparison operators

/** eq =equal to
 * gt(greater than )
 * gte(greater than and equal to)
 * lt(less than)
 * lte(less than and equal to)
 *
 *
 * in and not in --see documents in particular range
 */

async function getCourses1() {
  const courses = await Course.find({
    rating: {
      $in: [3.2, 4.5],
    },
  }).sort({ name: 1 });
  console.log(courses);
}

// getCourses1();

/**  LOgical operators
 *  and
 * or
 */

async function getCourses2() {
  const courses = await Course.find({
    rating: {
      $in: [3, 4.5, 4.2],
    },
  })
    .sort({ name: 1 })
    .and([{ creator: "Mrinal" }, { rating: 2 }]);
  console.log(courses);
}

// getCourses2();

// Update existing course

async function updateCourse(id) {
  let course = await Course.findById(id);
  if (!course) return;
  course.name = "OOPS";
  course.creator = "Shawn";
  let updatedCourse = await course.save();
  console.log(updatedCourse);
}
// updateCourse("6475694784d146f9b965a71d");

// delete course

async function deleteCourse(id) {
  let course = await Course.findByIdAndRemove(id);
  console.log(course);
}

deleteCourse("6475694784d146f9b965a71d");
