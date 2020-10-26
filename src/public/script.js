function checksIfEmpty(e) {
  // checks if inputfield is empty - changes state of required indicator
  const requiredLabel = e.target.previousElementSibling;
  const requiredIndicator = requiredLabel.firstElementChild.firstElementChild;
  if(e.target.value.trim().length > 0){
    requiredIndicator.style.fill = 'transparent';
  }
  else{
    requiredIndicator.style.fill = '#e4a206';
  }
};

function showHidePassword(e){
  var checkbox = e.target;
  var input = checkbox.previousElementSibling;
  console.log(e)
  var type = checkbox.checked ? 'text' : 'password';
  console.log(type)
  input.setAttribute('type', type);
}
