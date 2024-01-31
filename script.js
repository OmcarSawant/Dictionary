const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");

const sound = document.getElementById("sound");

const btn = document.getElementById("search");

// btn.addEventListener("click",()=>{
//     let inpWord = document.getElementById(ipword);
//     console.log(inpWord);
// })

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("ipword").value;
  // console.log(inpWord);
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    // .then((data)=>console.log(data));
    .then((data) => {
      console.log(data);
      result.innerHTML = `
      <div class="short">
        <span>${inpWord}</span><i class="fa-solid fa-volume-high"></i>
       </div>
       <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <br>
            <p>/${data[0].phonetic}/</p>
            <br>
            <p class="meaning">=>${data[0].meanings[0].definitions[0].definition}</p>
        </div>`;
        
    });
});
