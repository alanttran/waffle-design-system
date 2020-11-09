function checksIfEmpty(e) {
  // checks if input field is empty - changes state of required indicator
  const requiredLabel = e.target.previousElementSibling;
  const requiredIndicator = requiredLabel.firstElementChild.firstElementChild;
  if(e.target.value.trim().length > 0){
    requiredIndicator.style.fill = 'transparent';
  }
  else{
    requiredIndicator.style.fill = '#FDAC42';
  }
};

function showHidePassword(e){
  // show/hide the password field by swapping the type
  var checkbox = e.target;
  var input = checkbox.parentNode.previousElementSibling;
  console.log(e)
  var type = checkbox.checked ? 'text' : 'password';
  console.log(type)
  input.setAttribute('type', type);
}

function pressed(e){
  // toggles aria-pressed for toggle-buttons
  var button = e.target;
  console.log(button);
  let pressed = button.getAttribute('aria-pressed') === 'true';
  button.setAttribute('aria-pressed', !pressed);
}

function rowHighlight(e){
  var checkbox = e.target;
  var row = checkbox.parentNode.parentNode.parentNode;
  var selected = checkbox.checked ? '#CCDDFF' : 'none';
  row.style.background = selected;

}