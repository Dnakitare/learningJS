// Temperature Cal


// created kelvin constant
const kelvin = 0;

// find celsius
let celsius = kelvin - 273;
// celsius to newton scale
let newton = celsius * (33/100);

console.log(`The temperature in Newtons is ${newton}.`);

// find fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round down fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);