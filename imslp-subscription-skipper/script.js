const countdownElement = document.querySelector('#sm_dl_wait');

if (countdownElement) {
  const destinationUrl = countdownElement.dataset['id'];

  location.href = destinationUrl;
}
