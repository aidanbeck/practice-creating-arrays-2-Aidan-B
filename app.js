let array = new Array(7);
array.fill("Hello");
for (i of array) { console.log(i); }

array.fill("Hi",0,4);
for (i of array) { console.log(i); }

let array2 = new Array(5);
for (i = 0; i < array2.length; i++) {
    array2[i] = i * 10;
}
for (i of array2) { console.log(i); }