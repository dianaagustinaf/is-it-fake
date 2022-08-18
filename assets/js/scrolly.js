// scrollama
// doc: https://github.com/russellgoldenberg/scrollama

var hero_images = document.querySelectorAll(".hero-image img");
var scroller = scrollama();

function handleStepEnter(response) {

  let step = response.element.dataset.step;
  let image_element = document.querySelector(`#hero-image-${step}`)
  if (image_element) {
    image_element.classList.add("visible");
  }
}

function handleStepExit(response) {

  if (response.direction == "up") {
    let step = response.element.dataset.step;
    let image_element = document.querySelector(`#hero-image-${step}`)
    if (image_element) {
      image_element.classList.remove("visible");
    }
  }
}

function init() {
  scroller
    .setup({
      step: "article#scrolly .step",
      debug: false,
      offset: 0.9
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);

  window.addEventListener("resize", scroller.resize);
}

init();
