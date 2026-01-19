const searchField = document.querySelector(".searchField");
const searchForm = document.querySelector(".search-form");
const location_field = document.querySelector('.location')
const feelsLike_Field = document.querySelector('#feelsLike')

const temp_area = document.querySelector(".temp");

let target = "Mumbai";

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  target = searchField.value;
  console.log(target);
  fetchData(target);
});

async function fetchData(location) {
  const url = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=yes`;

  try {
    // we need to make a call to the api
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let temp = data.current.temp_c;
    let location = data.location.name;
    let feelsLike = data.current.feelslike_c

    updateData(temp , location , feelsLike)

  } catch (error) {
    console.log(err);
  }
}


function updateData(temp , location , feelsLike){
     temp_area.innerText = temp
     location_field.innerText = location
     feelsLike_Field.innerText = feelsLike

}


// Enhancements   
