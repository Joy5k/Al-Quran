const loadData = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=33f1e133035d1a68a28e6253224e862b`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displayData(data))
    
    // console.log(data);
}
const displayData = (allData) => {
    // destructuring
    const { weather, main,name } = allData;
    const temp = main.temp;
    const tempToDegree = temp / 9.02;
    const fixedNumber=tempToDegree.toFixed(2)
    // console.log(visibility);
    document.getElementById('cityName').innerText=`${name}`
   document.getElementById("temp").innerText = `${fixedNumber}`;
    const test = document.getElementById("visibility").innerText = `${weather[0].main}`;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const getInputText = document.getElementById('inputText');
    const searchTheByTheText = getInputText.value;
    loadData(searchTheByTheText);
})

loadData('Patuakhali');