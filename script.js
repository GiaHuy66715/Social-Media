const btnDropdown = document.getElementById("js-btn-dropdown").addEventListener('click', showAndCloseDropdown);
const closeBtn = document.querySelector('.js-close-btn');
closeBtn.addEventListener('click', closeHeySection);
const hideHey = document.querySelector('.hey');

function showAndCloseDropdown() {
    let dropdown = document.getElementById("js-bars-dropdown");
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function closeHeySection() {
    hideHey.classList.add('js-hey-close');
}

function openText() {
  var text = document.getElementById("myText");
  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}
function open_Other_Text() {
  var other_text = document.getElementById("my_Other_Text");
  if (other_text.style.display === "block") {
    other_text.style.display = "none";
  } else {
    other_text.style.display = "block";
  }
}
function openImage() {
  var img = document.getElementById("myPhotos");
  if (img.style.display === "flex") {
    img.style.display = "none";
  } else {
    img.style.display = "flex";
  }
}