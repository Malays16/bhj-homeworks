const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData();

  const file = document.getElementById('file');
  formData.append('file', file.files[0]);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', form.action);

  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percentComplete = event.loaded / event.total;
      progress.value = percentComplete;
    }
  };
  xhr.send(formData);
});
