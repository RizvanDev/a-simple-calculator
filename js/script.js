
document.getElementById('zero').onclick = function () {
   let number = 0;
   document.getElementById('result').value += number;
};
document.getElementById('one').onclick = function () {
   let number = 1;
   document.getElementById('result').value += number;
};
document.getElementById('two').onclick = function () {
   let number = 2;
   document.getElementById('result').value += number;
};
document.getElementById('three').onclick = function () {
   let number = 3;
   document.getElementById('result').value += number;
};
document.getElementById('four').onclick = function () {
   let number = 4;
   document.getElementById('result').value += number;
};
document.getElementById('five').onclick = function () {
   let number = 5;
   document.getElementById('result').value += number;
};
document.getElementById('six').onclick = function () {
   let number = 6;
   document.getElementById('result').value += number;
};
document.getElementById('seven').onclick = function () {
   let number = 7;
   document.getElementById('result').value += number;
};
document.getElementById('eight').onclick = function () {
   let number = 8;
   document.getElementById('result').value += number;
};
document.getElementById('nine').onclick = function () {
   let number = 9;
   document.getElementById('result').value += number;
};

document.getElementById('comma').onclick = function () {
   let symbol = ".";
   document.getElementById('result').value += symbol;
};
document.getElementById('plus').onclick = function () {
   let symbol = " + ";
   document.getElementById('result').value += symbol;
};
document.getElementById('minus').onclick = function () {
   let symbol = " - ";
   document.getElementById('result').value += symbol;
};
document.getElementById('multiply').onclick = function () {
   let symbol = " * ";
   document.getElementById('result').value += symbol;
};
document.getElementById('division').onclick = function () {
   let symbol = " / ";
   document.getElementById('result').value += symbol;
};

document.getElementById('clean').onclick = function () {
   document.getElementById('result').value = "";
};

document.getElementById('delete').onclick = function () {
   let result = document.getElementById('result').value;
   document.getElementById('result').value = result.substring(0, result.length - 1);
};

document.getElementById('equality').onclick = function () {

   let result = document.getElementById('result').value;


   if (result) {
      document.getElementById('result').value = eval(result);
   };

   if (document.getElementById('result').value == Infinity) {
      document.getElementById('result').value = "You can't divide it by 0";
   };
};


let percent = document.getElementById('percent');
let more = document.getElementById('more');
let modal = document.getElementById('modal');

function showInfoModal() {
   if (modal.classList != 'show') {
      modal.classList.add('show');
   };
   setTimeout(function () {
      modal.classList.remove('show');
   }, 1500);
};

percent.addEventListener('click', function (e) {
   showInfoModal();
});
more.addEventListener('click', function (e) {
   showInfoModal();
});