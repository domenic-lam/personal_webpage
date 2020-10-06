// Google API
// Uses Google Apps Script to send form submissions to Google Sheets

// Collect game recs
const gameScriptURL = 'https://script.google.com/macros/s/AKfycbziVeTAwcdYK8w4z0oKC-xNH9Cuawvz1bAbAQCYAl92BTWMUGI/exec'
const gameForm = document.forms['submit-to-game-google-sheet']

gameForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(gameScriptURL, { method: 'POST', body: new FormData(gameForm)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})


// Collect music recs
const musicScriptURL = 'https://script.google.com/macros/s/AKfycbwQiLajY8p7DNrXJFwc5InHrWN0fS0CkmYgHBLoHeRpCLk_P4zr/exec'
const musicForm = document.forms['submit-to-music-google-sheet']

musicForm.addEventListener('submit', e => {
  e.preventDefault()
  fetch(musicScriptURL, { method: 'POST', body: new FormData(musicForm)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})