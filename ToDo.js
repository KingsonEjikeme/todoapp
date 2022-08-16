function handleClick(param) {
    console.log(param.style);
    param.parentElement.parentElement.remove();
  }
  input.addEventListener("keypress", function(event) {
    console.log(event.key);
    if(event.key == "Enter"){
        event.preventDefault();
        saveInput();
    }
});
  function saveInput() {
    let input = document.getElementById("input").value.trim();
    if (input !== "") {
      document.getElementById("input").value = "";
      var listTextDiv = document.createElement("div");
      var listTextAttr = document.createAttribute("class");
      listTextAttr.value = "col-8";
      listTextDiv.setAttributeNode(listTextAttr);
      var listText = document.createTextNode(input);
      var listElement = document.createElement("li");
      var buttonElement = document.createElement("div");
      var buttonText = document.createTextNode("x");
      var totalList = document.getElementById("list-section");
      var listSpan = document.createElement("span");
      var buttonDiv = document.createElement("div");
      var buttonDivAttr = document.createAttribute("class")
      buttonDivAttr.value = "col-2";
      buttonDiv.setAttributeNode(buttonDivAttr);
      var attr = document.createAttribute("onclick");
      attr.value = "handleClick(this)";
      var buttonStyle = document.createAttribute("class");
      buttonStyle.value =
        "bg-danger px-2 text-light rounded-2 text-center cursor-pointer";
      buttonElement.setAttributeNode(buttonStyle);
      var spanAttr = document.createAttribute("class");
      spanAttr.value = "row align-items-center gap-2";
      listSpan.setAttributeNode(spanAttr);
      buttonDiv.setAttributeNode(attr);
      listSpan.appendChild(listTextDiv);
      listSpan.appendChild(buttonDiv);
      buttonElement.appendChild(buttonText);
      buttonDiv.appendChild(buttonElement);
      listTextDiv.appendChild(listText);
      listElement.appendChild(listSpan);
      totalList.appendChild(listElement);



      console.log(listText);
    } else {
      alert("Enter a valid input.");
    }
  }