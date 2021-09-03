const api_Key = `59d0cc617e33211dec559cd8e1dfaee8`;
const searchTempareture = () => {
    const city = document.getElementById('city-name').value;
    console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}`
        // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}