async function fetchApi() {
    try {
        const result = await fetch(`https://api.mockaroo.com/api/generate.json?key=83b46010&count=1000&fields=[{"name":"id","type":"Row Number"},{"name":"first_name","type":"First Name"},{"name":"email","type":"Email Address"}]`);
        const data = await result.json();

        const totalElements = multiplyElements(data);
        timeComparison(totalElements);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function multiplyElements(data){
    const requiredElements = 1000000;
    let totalLength = 0;
    const multipliedElements = [];
    
    while(requiredElements > totalLength){
        multipliedElements.push(...data);
        totalLength += data.length;
    }

    return multipliedElements;
}

function timeComparison(elements){
    const num = 10000000;
    whileLoop(elements);
    forLoop(elements);
    forEachLoop(elements);
    concatenate(num);
    templateLiteral(num);
}

function whileLoop(elements){
    const pushedItems = [];

    console.time('While Loop');
    let i = 0;
    while (i < elements.length) {
        const item = elements[i];
        pushedItems.push(item);
        i++;
    }
    console.timeEnd('While Loop');
}

function forLoop(elements){
    const pushedItems = [];

    console.time('For Loop');
    for (let i = 0; i < elements.length; i++) {
        const item = elements[i];
        pushedItems.push(item);
    }
    console.timeEnd('For Loop');
}

function forEachLoop(elements){
    const pushedItems = [];

    console.time('ForEach Loop');
    elements.forEach(item => {
        pushedItems.push(item);
    });
    console.timeEnd('ForEach Loop');
}

function localVariables(){
    console.time('Local variables');
    let localProduct = 1;
    for (let i = 1; i <= 1000000; i++) {
        localProduct *= 2;
    }
    console.timeEnd('Local variables');
    return localProduct;
}

let globalProduct = 1;

function globalVariables(){
    console.time('Global variables');
    for (let i = 1; i <= 1000000; i++) {
        globalProduct *= 2; 
    }
    console.timeEnd('Global Variables');
}

function concatenate(num) {
    let result = '';
    console.time('Concatenate');
    for (let i = 0; i < num; i++) {
        result += 'Constant: ' + i + ', '; 
    }
    console.timeEnd('Concatenate');
}

function templateLiteral(num) {
    let result = '';
    console.time('Template Literal');
    for (let i = 0; i < num; i++) {
        result += `Constant: ${i}, `; 
    }
    console.timeEnd('Template Literal');
}

fetchApi();