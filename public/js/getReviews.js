
const reviewsDiv = document.getElementById("reviews-div");
console.log(reviewsDiv)
const getReviews = async () => {
    let response = await fetch('/api/review', {
        method: "GET"
    });

    if (response.ok) {
        const responseArr = await response.json();

        responseArr.forEach(review => {

            const carIDText = `Car ID: ${review.car_id}`
            const ratingText = `Rating: ${review.rating}`
            const descriptionText = `Description: ${review.description}`

            const carIDTextNode = document.createTextNode(carIDText);
            const ratingTextNode = document.createTextNode(ratingText);
            const descriptionNode = document.createTextNode(descriptionText);


            let carIDSpan = document.createElement("span");
            let ratingSpan = document.createElement("span");
            let descriptionSpan = document.createElement("span");

            carIDSpan.appendChild(carIDTextNode);
            ratingSpan.appendChild(ratingTextNode);
            descriptionSpan.appendChild(descriptionNode);

            const card = document.createElement("div");
            card.classList.add("card");
            card.appendChild(carIDSpan);
            card.appendChild(ratingSpan);
            card.appendChild(descriptionSpan);

            reviewsDiv.appendChild(card);

        });


        console.log(response)
    } else {
        const newContent = document.createTextNode("Error loading reviews");
        reviewsDiv.appendChild(newContent);
    }

}

getReviews();