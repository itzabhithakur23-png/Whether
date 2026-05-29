let apikey ="16a8d3c8ea64a91f74bc92abd3e22289"

let searchBtn = document.querySelector("#search-btn");
let resultBox = document.querySelector("#result");


searchBtn.addEventListener("click", async () => {
    let cityName = document.querySelector("#city-name").ariaValueMax.trim();

    if (cityName === "") {
        resultBox.classList.remove("hidden");
        resultBox.innerHTML = `<h3> please Enter a city Name</h3>`;
        return;
    }

    try {
        
    } catch (error) {
        console.log(error);
        resultBox.innerHTML = `<h3> Error in fetching weather data...</h3>`;
        
        
    }

});