const shareButtons = document.querySelectorAll('.title-share-button');

console.log(shareButtons);

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link');
  console.log(link);

  try {
    await navigator.clipboard.writeText(link);
    alert('Text Di Copy: ' + link);
  } catch (err) {
    console.log(err);
  }
}

shareButtons.forEach((shareButtons) => shareButtons.addEventListener('click', copyText));

var icon = document.getElementById('icon1');

icon.onclick = function () {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')) {
    icon.src = 'img/sun.svg';
  } else {
    icon.src = 'img/moon.png';
  }
};
