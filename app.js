$(() => {
  const changeColor = (event) => {
    // $(event.target).addClass("pink");
    $(event.target).css("background-color", randomColorRGB());
  };

  $("form").on("submit", (event) => {
    const inputValue = $("#input-box").val();
    generateDivs(inputValue);
    event.preventDefault();
    $(event.currentTarget).trigger("reset");
  });

  let generateDivs = (input) => {
    for (let i = 0; i < input; i++) {
      let $div = $("<div>");
      $div.addClass("square");
      $(".container").append($div);
    }
    $(".square").on("mouseover", changeColor);
  };

  const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };
});
