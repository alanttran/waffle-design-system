function checksIfEmpty(e) {
  // checks if inputfield is empty - changes state of required indicator
  const requiredLabel = e.target.previousElementSibling;
  if(e.target.value.trim().length > 0){
    requiredLabel.firstElementChild.firstElementChild.style.fill = 'transparent';
  }
  else{
    requiredLabel.firstElementChild.firstElementChild.style.fill = '#e4a206';
  }
};

  // get required inputs
  
  // set initial (closed menu) states
  // button.setAttribute("aria-expanded", "false");
  // button.hidden = false;
  // menu.hidden = true;
  // requiredInput.addEventListener("click", function() {
  //   // toggle menu visibility
  //   var expanded = this.getAttribute("aria-expanded") === "true";
  //   this.setAttribute("aria-expanded", String(!expanded));
  //   menu.hidden = !expanded;
