const loadData = (idName) => {
    const url = `https://quranenc.com/api/v1/translation/sura/english_saheeh/${idName}`;
    fetch(url)
        .then(res => res.json())
        .then(data=>displaySura(data.result))
}
const displaySura = (allData) => {
    // console.log(allData);
    const suraName = document.getElementById('ayat');
        suraName.innerHTML = '';
    allData.forEach(data => {
        const {arabic_text,aya,translation,footnotes} = data; 
        const createAyatContainer = document.createElement('p');
        createAyatContainer.classList.add('fw-bold');
        createAyatContainer.innerHTML = `${(aya)}. ${arabic_text} <br>
        ${translation} `;
      
  
        suraName.appendChild(createAyatContainer);
     
    });
   
    
}


document.getElementById('btn-search').addEventListener('click', function () {
    const getInputText = document.getElementById('input-field');
    const inputText = getInputText.value;
    console.log(inputText);
    loadData(inputText);
});

