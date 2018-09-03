// console.log('Hello World!')
// document.write('<h1>Hello World</h1>');

// for (let i = 100; i >= 2; i -= 2) {
//     document.write('<h1>' + i + ' Hello JS!</h1>');
// }

// let i = 1;
// while (i <= 100) {
//     document.write('<h1>' + i + ' Hello JS!</h1>');
//     i++;
// }

// let num = parseFloat(prompt('Enter a number'));
// while (isNaN(num)) {
//     alert('Please enter a number');
//     num = parseFloat(prompt('Enter a number'));
// }


// let num;
// do {
//     alert('Please enter a number');
//     num = parseFloat(prompt('Enter a number'));
// } while (isNaN(num))
// alert('Thank you! You entered number: ' + num);

let productNames = ['Toyota Corolla', 'Tesla Model S', 'Chevrolet Corvette'];
// alert(productNames[0]);
// alert(productNames[2]);
alert(productNames.length);
productNames.push('Ferrari LaFerrari');
alert(productNames.length);
productNames[4] = 'BMW X6';
alert(productNames.length);
productNames[10] = 'Mercedes Vito';
alert(productNames.length);

//for (let i = 0; i < productNames.length; i++) 
//if (productNames[i] !==undefined )
//{document.write(productNames[i] + '<br>');}



//for (let i = 0; i < productNames.length; i++) 
//if (productNames[i] )
//{document.write(productNames[i] + '<br>');}



//for (let i = 0; i < productNames.length; i++) {
//    if (productNames[i] === undefined) {
//        continue;
//    }
//    document.write(productNames[i] + '<br>');
//}



//function printVal(val) {
//    document.write(val + '<br>');
//}

//productNames.forEach(printVal);

//productNames.forEach(function(el){
//    document.write(el + '<br>');
//});

productNames.forEach( el => document.write(el + '<br>') );