const getById = id => document.getElementById(id);

const input_form = getById('addPicture');
const newsForm = getById('newsForm')
const text = getById('text');
const caption = getById('caption') 

const onSubmitPress = (e) => {
  e.preventDefault();

  const isValid = (text.value.length > 0 && caption.value.length > 0);
  input_form.classList.add('was-validated')
  newsForm.classList.add('was-validated');

  if (!isValid) return;

  input_form.classList.remove('was-validated');
  newsForm.classList.remove('was-validated');
  input_form.reset();
  newsForm.reset();

  alert('Вашу новину успішно збережено!');
}

const fileInput = getById('formForFile')

function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#example_picture').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#formForFile").change(function() {
  readURL(this);
});

const addButton = getById('submit-btn');
addButton.onclick = onSubmitPress;