let favArr = localStorage.getItem("favArr");
if (!favArr) {
  favArr = []
} else {
  favArr = JSON.parse(favArr)
  showFavMovie()
}

console.log(favArr)
const fetchMovie = async (nameMovie) => {

  const api = `https://www.omdbapi.com/?i=tt3896198&apikey=ef3a9515&s=${nameMovie}`;
  const data = await fetch(api);
  try {
    if (!data.ok) {
      throw new Error("Some problem of the man")
    } else {
      const jsonData = await data.json();
      return jsonData.Search
    }
  }
  catch (err) {
    console.log(err)
  }
}
let hey = 'today is sunday'
function getMessage() {
  console.log("Prine numbers")
}


const showData = (movie) => {


  return `<div class="col"><div class="card" style="width: 18rem;">
<img src="${movie.Poster}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${movie.Title}</h5>
  <button class="btn btn-danger" onclick="fevuriteData('${movie.Title}','${movie.Poster}')">Add Card</button>
</div>
</div></div>`
}

function showdatafav(movie) {
  return `<div class="col"><div class="card" style="width: 18rem;">
<img src="${movie.Poster}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${movie.Title}</h5>
  </div>
  </div>
  </div>`;

}

function fevuriteData(title, poster) {
  let myObj = { Title: title, Poster: poster };
  favArr.push(myObj);
  localStorage.setItem("favArr", JSON.stringify(favArr))
  console.log(favArr);

}

const showMovies = async () => {
  const val = document.getElementById('movies_list');
  let movie = document.getElementById('searchBox').value;
  const MovieArray = await fetchMovie(movie);
  MovieArray.forEach((a) => {
    val.innerHTML += showData(a);
  })
}


function showFavMovie() {
  const favData = document.getElementById('fav_list');
  if (favData) {

    favData.innerHTML = '';
    favArr.forEach((a) => {


      favData.innerHTML += showdatafav(a);


    });
  }
}