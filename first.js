const textArea = document.querySelector(".input_text");
const inputButton = document.querySelector(".translate-btn");
const output = document.querySelector(".output_text");

function fetchData(text) {
  fetch(`https://api.funtranslations.com/translate/minion.json?text=${text}`)
    .then((response) => response.json())
    .then((data) => {
      output.style.color = "white";
      translate(data.contents.translated);
      // console.log(translate(data.contents.translated));
    })
    .catch((error) => {
      console.log(error);
      translate(
        "something wrong with the server can you come again after some time.. "
      );
      output.style.color = "red";
    });
}

function translate(text) {
  output.innerHTML = `${text}`;
}

inputButton.addEventListener("click", () => {
  if (textArea.value.length) {
    // console.log(textArea.value);
    fetchData(textArea.value);
  } else {
    alert("Please Put the text you want to translate in the box.");
  }
});
