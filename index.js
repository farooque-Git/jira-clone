const dragElement = document.getElementById("drag");
const dropElement = document.getElementById("drop");
// user start dragging the element
dragElement.addEventListener("dragstart", () => {
  console.log("start dragging");
});
// stop dragging by user
dragElement.addEventListener("dragend", () => {
  console.log("stopped dragging");
});

dropElement.addEventListener("dragenter", () => {
  console.log("drag event enter");
});

dropElement.addEventListener("dragover", () => {
  console.log("drag over");
});

dropElement.addEventListener("dragleave", () => {
  console.log("drag leave");
});
