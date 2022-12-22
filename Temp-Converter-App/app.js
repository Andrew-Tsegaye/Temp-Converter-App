// Get the elements from the DOM
const inputs = document.querySelectorAll('.panel input');
const c = document.querySelector('#celsius');
const f = document.querySelector('#fahrenheit');
const k = document.querySelector('#kelvin');

// Loop through all inputs
inputs.forEach(input => {
  // Add on input event on all inputs
  input.addEventListener('input', e => {
    /* Get the id from the input the event takes place on */
    const unit = e.target.id;
    /* Get the value from the input the event takes place on */
    const v = parseInt(e.target.value);
    /* If the input event takes place in the celsius input */
    if (unit === 'celsius') {
      // Convert the value to fahrenheit
      f.value = parseFloat(v * 1.8 + 32).toFixed(2) * 1;
      // Convert the value to kelvin
      k.value = parseFloat(v + 273.15).toFixed(2) * 1;
    } else if (unit === 'fahrenheit') {
      /* If the input event takes place in the fahrenheit input */
      // Convert the value to celsius
      c.value = parseFloat(((v - 32) * 5) / 9).toFixed(2) * 1;
      // Convert the value to kelvin
      k.value = parseFloat(((v - 32) * 5) / 9 + 273).toFixed(4) * 1;
    } else if (unit === 'kelvin') {
      /* If the input event takes place in the kelvin input */
      // Convert the value to celsius
      c.value = parseFloat(v - 273.15).toFixed(2) * 1;
      // Convert the value to fahrenheit
      f.value = parseFloat(((v - 273.15) * 9) / 5 + 32).toFixed(4) * 1;
    }
  });
});
