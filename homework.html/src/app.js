//create a function to check the select value and match it to moment time
function showPopUp(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "paris") {
      alert(
        `It is ${moment()
          .tz("Europe/Paris")
          .format("dddd, MMMM D, YYYY h:mm A")} in Europe/Paris`
      );
    }

    if (event.target.value === "sydney") {
      alert(
        `It is ${moment()
          .tz("Australia/Sydney")
          .format("dddd, MMMM D, YYYY h:mm A")} in Australia/Sydney`
      );
    }
    if (event.target.value === "tokyo") {
      alert(
        `It is ${moment()
          .tz("Asia/Tokyo")
          .format("dddd, MMMM D, YYYY h:mm A")} in Asia/Tokyo`
      );
    }
  }
}

//select the html element and add andeventlistener
let cityElement = document.querySelector("#time-zone");
cityElement.addEventListener("change", showPopUp);
