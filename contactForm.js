<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxJc4TrGMUqjLuJU0xHTKUNRTTpfK9rZCA7x6sNot-Tr3WAXr7XIY1dm1LI3RBrxsU/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>