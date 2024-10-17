async function fetchApi() {
    try {
        const result = await fetch(`https://api.mockaroo.com/api/generate.json?key=83b46010&count=1000&fields=[{"name":"id","type":"Row Number"},{"name":"first_name","type":"First Name"},{"name":"email","type":"Email Address"}]`);
        const data = await result.json();

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchApi();