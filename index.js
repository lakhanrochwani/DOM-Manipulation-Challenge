// Import stylesheets
import './style.css';

// Write Javascript code!

/* ARGUMENTS SHOULD NOT BE MUTATED */

/*
Write a function which adds a class "highlight" to the introduction paragraph
*/
var highlightText = function () {
  let introPara = document.querySelector('.introduction');
  introPara.className += ' highlight';
};
highlightText();

/*
Write a function which removes the class "highlight" from the introduction
paragraph
*/
var unHighlightText = function () {
  let introPara = document.querySelector('.introduction');
  introPara.classList.remove('highlight');
};
// unHighlightText(); //uncomment me to test

/*
Write a function which, if the introduction paragraph has the class "highlight",
it will be removed; otherwise the class "highlight" is added.
*/
var toggleHighlight = function () {
  let introPara = document.querySelector('.introduction');
  introPara.classList.toggle('highlight');
};
// toggleHighlight(); //uncomment me to test

/*
Write a function which returns all text content of the introduction paragraph
*/
var getText = function () {
  let introPara = document.querySelector('.introduction');
  console.log(introPara.textContent);
};
getText(); //uncomment me to test

/*
Write a function which returns the number of charachters in the introduction
paragraph
*/
var getNumChars = function () {
  let introPara = document.querySelector('.introduction');
  console.log(introPara.textContent.length);
};
getNumChars(); //uncomment me to test

/*
Write a function which returns the number of words in the introduction paragraph
*/
var getNumWords = function () {
  let introPara = document.querySelector('.introduction');
  console.log(introPara.textContent.split(' ').length);
};
getNumWords(); //uncomment me to test

/*
Write a function which returns the number of sentences in the introduction
paragraph
*/
var getNumSentences = function () {
  let introPara = document.querySelector('.introduction');
  console.log(introPara.textContent.split('.').length - 1);
};
getNumSentences(); //uncomment me to test

/*
Write a function which takes a string, and returns true if the introduction
paragraph contains that string, and false if it doesn't.
*/
var containsString = function (str) {
  let introPara = document.querySelector('.introduction');
  console.log(introPara.textContent.includes(str));
};
containsString('anis'); //uncomment me to test

/*
Write a function which returns the value in the `firstName` text input
*/
var getFirstNameValue = function () {
  let firstName = document.querySelector('.test');
  console.log(firstName.value);
};
getFirstNameValue(); //uncomment me to test

/*
Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
var getValue = function (inputName) {
  let element = document.getElementsByName(inputName);
  console.log(element[0].value);
};
getValue('email'); //uncomment me to test

/*
Write a function which takes an object,`formState`, and a string, `inputName`,
and returns a copy of the object, but with an `inputName` key on the object
whose value is taken from the input element with that name.
*/
var updateStateValue = function (formState, inputName) {
  let element = document.getElementsByName(inputName);
  let valueElement = element[0].value;
  Object.defineProperty(formState, inputName, { value: valueElement });
  console.log(formState);
};
updateStateValue({}, 'email'); //uncomment me to test

/*
Write a function which takes an object,`formState`, and an array of string,
`inputNames`, and returns a copy of the object, which stores the values of each
input with name in `inputNames` array.
*/
var updateStateValues = function (formState, inputNames) {
  inputNames.forEach((name) => {
    let element = document.getElementsByName(name);
    let valueElement = element[0].value;
    Object.defineProperty(formState, name, { value: valueElement });
  });
  console.log(formState);
};
updateStateValues({}, ['firstName', 'lastName', 'email']); //uncomment me to test

/*
Write a function which returns an **array** of values of inputs with a given class
*/
var getInputValues = function (className) {
  let values = [];
  let elements = document.getElementsByClassName(className);
  for (let element of elements) {
    values.push(element.value);
  }
  console.log(values);
};
getInputValues('test'); //uncomment me to test

/*
Write a function which takes a className, and returns the number of elements in
the DOM with that className. If the function is passed an argument which doesn't
have type `string`, the function should return 0;
*/
var getNumElsOfClass = function (className) {
  console.log(document.getElementsByClassName(className).length);
};
getNumElsOfClass('test'); //uncomment me to test

/*
Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
var generateUl = function (array) {};
// generateUl(put an argument here ); //uncomment me to test

/*
Write a function, `generateNestedUl`, which takes array whose elements can be
either strings or arrays of strings, and which returns a `ul` htmlElement
containing `li` elements for each array element. Each `li` should contain the
value of the array element if is a string, or a `ul` containing `li` elements
of the array if element is an array.
*/
var generateNestedUl = function (array) {
  let list = document.createElement('ul');
  array.forEach((str) => {
    let li = document.createElement('li');
    li.textContent = str;
    list.append(li);
  });
  document.body.append(list);
};
generateNestedUl(['John', 'Whiles', 'fake@notreal.false']); //uncomment me to test

/*
Using the above functions, write a function which takes a filter function,
which returns a function that takes an array, that generates a `ul` as above
but with filtered elements.
*/
