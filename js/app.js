//console.log("Hello World");
const API_KEY = `fea1f108bfe2040a9e1f3c3ceff070ff`;

const loadData = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaydata(data))
}

const displaydata = data => {

    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('sunrise', data.sys.sunrise);
    setInnerTextById('sunset', data.sys.sunset);

}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}


document.getElementById('btn-search').addEventListener('click', function () {
    const searhBtn = document.getElementById('search-field');
    //console.log(searhBtn);
    const city = searhBtn.value;
    //console.log(city);
    document.getElementById('city').innerText = city;

    loadData(city);

})

loadData('texas');