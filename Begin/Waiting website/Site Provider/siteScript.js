
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxVlT3Y4QpZskFHk_qdinozuYcF_5aCcoc-n9KZvxUff11-g-vPZhrNxYM2zKw4QMuGUw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');


  form.addEventListener('submit', e => {
    e.preventDefault()
    msg.innerHTML = "Submitting...";
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "You're Checked In !!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset();
      })
      .catch(error => {
        msg.innerHTML = "Submission failed!";
        console.error('Error!', error.message);
  });
  });
