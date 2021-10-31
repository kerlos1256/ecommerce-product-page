const millesecends = [100, 200, 300, 400, 500, 1000];
const classes = ["hidden"];
const elements = [];

console.log("test");
function main() {
  classes.forEach((Class) => {
    millesecends.forEach((ms) => {
      const elements = document.querySelectorAll(`.delay-${ms}-${Class}`);
      console.log(elements);
      elements.forEach((element) => {
        setTimeout(() => {
          element.classList.add(Class);
        }, ms);
      });
    });
  });
}

export default main;
