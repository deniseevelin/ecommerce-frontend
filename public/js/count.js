const count = {
  init: () => {
    count.increment()
    count.decrement();
  },
  increment: () => {
    const elements = document.querySelectorAll(".bt-increment");
    for (let element of elements) {
      element.addEventListener("click", (e) => {
        console.log(element.nextElementSibling.value);
        let count = element.nextElementSibling.value;
        count++; 
        element.nextElementSibling.value = count;
      });
    }
  },
  decrement: () => {
    const elements = document.querySelectorAll(".bt-decrement");
    for (let element of elements) {
      element.addEventListener("click", (e) => {
        console.log(element.previousElementSibling.value);
        let count = element.previousElementSibling.value;
        count--; 
        element.previousElementSibling.value = count;
      });
    }
  },
};
document.addEventListener("DOMContentLoaded", count.init);
