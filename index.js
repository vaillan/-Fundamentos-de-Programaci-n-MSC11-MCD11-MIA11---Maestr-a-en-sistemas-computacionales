// Import stylesheets
import './style.css';

//Variables globales
let inputValue1;
let inputValue2;
let mcd;
let mcm;

// Write Javascript code!
document.getElementById('c').addEventListener('click', onInit);

/**
 * Función para inicializar proceso principal
 *
 * @return {void}
 */
function onInit(e) {
  inputValue1 = document.getElementById('num1').value;
  inputValue2 = document.getElementById('num2').value;
  mcd = getMcd();
  mcm = getMcm(mcd);
  setAlert();
}

/**
 * Obtiene el número menor
 *
 * @param {integer} num1
 * @param {integer} num2
 * @returns {integer}
 */
function getNumeroMenor(num1, num2) {
  return Math.min(num1, num2);
}

/**
 * Máximo Común Divisor (MCD)
 *
 * @returns {integer}
 */
function getMcd() {
  let _mcd = 0;
  for (let i = 0; i <= getNumeroMenor(inputValue1, inputValue2); i++) {
    if (inputValue1 % i === 0 && inputValue2 % i === 0) {
      _mcd = i;
    }
  }
  return _mcd;
}

/**
 * Mínimo común múltiplo (mcm)
 */
function getMcm(mcd) {
  return (inputValue1 * inputValue2) / mcd;
}

/**
 * Función para mostrar factorial
 *
 * @returns {void}
 */
function setAlert() {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');

  alert.innerHTML = `
  <p>Máximo Común Divisor: ${mcd}</p>
  <p>Mínimo común múltiplo: ${mcm}</p>
  `;
}
