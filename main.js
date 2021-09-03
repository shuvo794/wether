const api_Key = `59d0cc617e33211dec559cd8e1dfaee8`;
const searchTempareture = () => {
    const city = document.getElementById('city-name').value;
    // console.log(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`
        // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => searhDisplay(data))
}
const tempId = (id, text) => {
    document.getElementById(id).innerText = text;
}
const searhDisplay = tempareture => {
    console.log(tempareture);
    tempId('city', tempareture.name)
    tempId('tempu', tempareture.main.temp)
    tempId('wether', tempareture.weather[0].main)
    const url = `https://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`
    const imgId = document.getElementById('imgIcon')
    imgId.setAttribute('src', url)
}