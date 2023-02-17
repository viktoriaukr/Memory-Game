const gameContainer = document.getElementById("game");
const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1507471509451-1d04d60f896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    value: "red",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1670282654525-62fed9d7d4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    value: "blue",
  },
  {
    src: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    value: "green",
  },
  {
    src: "https://images.unsplash.com/photo-1547514701-f2c1765799dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    value: "orange",
  },
  {
    src: "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    value: "purple",
  },
  {
    src: "https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    value: "yellow",
  },
  {
    src: "https://images.unsplash.com/photo-1507471509451-1d04d60f896d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    value: "red",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1670282654525-62fed9d7d4ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80",
    value: "blue",
  },
  {
    src: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    value: "green",
  },
  {
    src: "https://images.unsplash.com/photo-1547514701-f2c1765799dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    value: "orange",
  },
  {
    src: "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    value: "purple",
  },
  {
    src: "https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    value: "yellow",
  },
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(IMAGES);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivForColors(imageArray) {
  for (let image of imageArray) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("value", image.value);

    const face = document.createElement("img");
    face.classList.add("face");
    face.setAttribute("src", image.src);

    const back = document.createElement("div");
    back.classList.add("back");

    card.appendChild(face);
    card.appendChild(back);
    gameContainer.appendChild(card);

    card.addEventListener("click", handleCardClick);
  }
}

// TODO: Implement this function!

function handleCardClick(event) {
  console.log(event.target);
  const clickedCard = event.target;
  clickedCard.classList.toggle("flip");
  const flipped = document.querySelectorAll(".flip");

  if (flipped.length === 2) {
    if (flipped[0].getAttribute("value") === flipped[1].getAttribute("value")) {
      flipped.forEach((card) => {
        card.classList.remove("flip");
        card.classList.add("match");
        card.style.pointerEvents = "none";
      });
    } else {
      flipped.forEach((card) => {
        setTimeout(function () {
          card.classList.remove("flip");
        }, 1000);
      });
    }
  }
}

// when the DOM loads
createDivForColors(shuffledColors);
/* */
