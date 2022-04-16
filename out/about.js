/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./js/about.new.js ***!
  \*************************/
var typeOfDeposit = document.getElementById("type");
var terms = document.getElementById("term");
var calcButton = document.getElementById("calc_button");
var calcSol = document.getElementById("calc_sol");
var calcSol2 = document.getElementById("calc_sol2");
var contr = document.getElementById("calc_contr");
var refOptions = [{
  months: 6,
  percent: 10,
  text: "6 месяцев - 20%"
}, {
  months: 12,
  percent: 22,
  text: "1 год - 22%"
}, {
  months: 18,
  percent: 22.5,
  text: "1,5 года - 15%"
}, {
  months: 24,
  percent: 20,
  text: "2 года - 10%"
}];
var termOptions = [{
  months: 3,
  percent: 5,
  text: "3 месяца - 20%"
}, {
  months: 6,
  percent: 11,
  text: "6 месяцев - 22%"
}, {
  months: 9,
  percent: 17.25,
  text: "9 месяцев - 23%"
}, {
  months: 12,
  percent: 24,
  text: "1 год - 24%"
}, {
  months: 18,
  percent: 27,
  text: "1,5 года - 18%"
}, {
  months: 24,
  percent: 30,
  text: "2 года - 15%"
}];

var onTypeChange = function onTypeChange() {
  var arr = [];
  typeOfDeposit.value === "1" ? arr = refOptions : arr = termOptions;

  while (terms.options.length > 0) {
    terms.remove(0);
  }

  for (var i = 0; i < arr.length; i++) {
    var opt = document.createElement('option');
    opt.value = arr[i].percent;
    opt.innerHTML = "<p>".concat(arr[i].text, "</p>");
    opt.id = "option".concat(i);
    terms.appendChild(opt);
  }
};

var calcTerm = function calcTerm() {
  var vklad;
  typeOfDeposit.value === "1" ? vklad = "Пополняемый" : vklad = "Срочный";

  if (contr.value) {
    if (contr.value <= 0) {
      calcSol2.innerHTML = "<p style='color: red'> Введите правильную сумму!</p>";
    } else {
      var finalSol = Number(terms.value / 100 * contr.value) + Number(contr.value);
      calcSol.textContent = "\u041F\u043E \u0432\u043A\u043B\u0430\u0434\u0443 \"".concat(vklad, "\" \u043D\u0430 \u0441\u0440\u043E\u043A \u0438 \u0441\u0442\u0430\u0432\u043A\u0443 ").concat(terms.options[terms.selectedIndex].textContent, ", \u043F\u0440\u0438 \u0441\u0443\u043C\u043C\u0435 \u0432\u043A\u043B\u0430\u0434\u0430 ").concat(contr.value);
      calcSol2.textContent = "\u0412 \u043A\u043E\u043D\u0446\u0435 \u0441\u0440\u043E\u043A\u0430 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 ".concat(finalSol, "\u0440.");
    }
  } else {
    calcSol.innerHTML = "<p style='color: red'>Введите сумму вклада!</p>";
    calcSol2.textContent = "";
  }
};

typeOfDeposit.addEventListener('change', onTypeChange);
calcButton.addEventListener('click', calcTerm);
onTypeChange();
/******/ })()
;
//# sourceMappingURL=about.js.map