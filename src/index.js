var sales = 123456789;
var course_name = "nalinda";
var is_published = true;
// any type
var level;
function fetchCourse(title) {
  console.log(title);
}
fetchCourse("Maths");
//arrays
var jsArray = [1, 2, "3"]; // JS arrays are dynamic, can store different types
var tsArray = [1, 2, 3];
tsArray.forEach(function (n) {
  var expo = n.toExponential;
  console.log(expo);
});
tsArray.map(function (item) {
  console.log(item);
});
