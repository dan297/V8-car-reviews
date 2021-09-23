const searchForm = document.getElementById("searchForm")
const searchInput = document.getElementById("searchInput")

async function handleSearchSubmit (event){
    event.preventDefault()
const search = await fetch(`/api/cars/${searchInput.value}`, {
    method: "GET",


    headers: {
      "Content-Type": "application/json"
    },
  });
console.log(JSON.stringify(search));

}



searchForm.addEventListener("submit", handleSearchSubmit)
