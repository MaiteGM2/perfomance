async function fetchApi() {
    try {
        const result = await fetch(`https://api.mockaroo.com/api/generate.json?key=83b46010&count=1000&fields=[{"name":"id","type":"Row Number"},{"name":"first_name","type":"First Name"},{"name":"email","type":"Email Address"}]`);
        const data = await result.json();

        const totalElements = multiplyElements(data);
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

fetchApi();