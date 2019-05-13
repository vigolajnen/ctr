var form = document.querySelector('.form-order')
var validateBtn = document.querySelector('.form-order__btn');
var fields = document.querySelectorAll('.form-order__input');

// функцию, которая будет принимать на вход строку и возвращать DOM елемент
var generateError = function (text) {
  var error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
};

// очистку ошибок
var removeValidation = function () {
  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

// проверку полей на пустоту
var checkFieldsPresence = function () {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i]);
      var error = generateError('Cant be blank');
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
};

// валидацию пароля
var checkPasswordMatch = function () {
  if (password.value !== passwordConfirmation.value) {
    console.log('not equals');
    var error = generateError('Password doesnt match');
    console.log(error);
    password.parentElement.insertBefore(error, password);
  }
};

form.addEventListener('submit', function (event) {
  event.preventDefault();

  removeValidation();

  checkFieldsPresence();

  // checkPasswordMatch()
});
