const animalGuessGame = [
  {
    question: "I’m known as the king of the jungle. What am I?",
    hint: "My roar can be heard from miles away.",
    answer: "Lion",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    alt: "A lion lying in the grass in Namibia",
  },
  // {
  //   question: "I carry my house on my back and move super slow. What am I?",
  //   hint: "I leave a slimy trail behind me.",
  //   answer: "Snail",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Snail.jpg/500px-Snail.jpg  ",
  //   alt: "A snail crawling on a green leaf",
  // },
  // {
  //   question: "I’m black and white and loved for my bamboo diet. What am I?",
  //   hint: "I live in the mountains of China.",
  //   answer: "Panda",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
  //   alt: "A giant panda eating bamboo",
  // },
  // {
  //   question:
  //     "I hang upside down, sleep a lot, and move very slowly. What am I?",
  //   hint: "You’ll mostly find me in the rainforests of Central and South America.",
  //   answer: "Sloth",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/500px-Bicho-pregui%C3%A7a_3.jpg",
  //   alt: "A sloth hanging upside down on a tree branch",
  // },
  // {
  //   question: "I’m the only mammal that can truly fly. What am I?",
  //   hint: "I come out mostly at night and may live in caves.",
  //   answer: "Bat",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/3/3f/Golden_crowned_fruit_bat.jpg",
  //   alt: "A fruit bat hanging upside down",
  // },
  // {
  //   question:
  //     "You might see me in your yard, hopping around and eating bugs. I ribbit! What am I?",
  //   hint: "I start life as a tadpole.",
  //   answer: "Frog",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Bombina_bombina_1_%28Marek_Szczepanek%29_tight_crop.jpg/500px-Bombina_bombina_1_%28Marek_Szczepanek%29_tight_crop.jpg",
  //   alt: "A common frog sitting on a rock",
  // },
  // {
  //   question:
  //     "I have eight legs and spin webs. Some people fear me! What am I?",
  //   hint: "I’m not an insect—I belong to the arachnid family.",
  //   answer: "Spider",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plexippus_paykulli_-_50959617953.jpg/500px-Plexippus_paykulli_-_50959617953.jpg",
  //   alt: "A close-up of a garden spider on its web",
  // },
  // {
  //   question: "I can change my color to blend into my surroundings. What am I?",
  //   hint: "I have eyes that can move in two directions at once.",
  //   answer: "Chameleon",
  //   image_url:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chamaeleo_namaquensis_%28Namib-Naukluft%2C_2011%29.jpg/500px-Chamaeleo_namaquensis_%28Namib-Naukluft%2C_2011%29.jpg",
  //   alt: "A colorful Yemen chameleon on a branch",
  // }
];

const $startBtn = document.querySelector(`[data-btnType="btn-start"]`);
const $container = document.querySelector(".container");

let remainingAnimals = [...animalGuessGame];

function displayQuestion(animal) {
  $container.innerHTML = `
    <div class="card">            
        <form class="form" action="">
            <label class="form__label"> ${animal.question}</label>
            <input class="form__input" type="text" placeholder="Your answer">
            <input class="form__submit btn" type="submit" value="Guess">
        </form>
    </div>`;
}

function displayAnimalImage(animal) {
  $container.innerHTML = `
    <div class="card">
      <img class="card__image" src="${animal.image_url}" alt="${animal.alt}">
      <p>Great job! You guessed it right!</p>
    </div>`;
  setTimeout(displayRandomAnimal, 2000);
}

function handleIncorrectAnswer(animal, hintDisplayed) {
  if (!hintDisplayed) {
    const $card = document.querySelector(".card");
    $card.insertAdjacentHTML(
      "beforeend",
      `<p class="hint">Hint: ${animal.hint}</p>`
    );
    return true;
  }
  alert("Incorrect! Try again.");
  return hintDisplayed;
}

function restartGame() {
  remainingAnimals = [...animalGuessGame];
  $container.innerHTML = "";
  $startBtn.click();
}

function displayEndMessage() {
  $container.innerHTML = `
    <h2>Congratulations! You've guessed all the animals!</h2>
    <button class="btn btn--restart" data-btnType="btn-restart">Restart</button>`;
  const $restartBtn = document.querySelector(`[data-btnType="btn-restart"]`);
  $restartBtn.addEventListener("click", restartGame);
}


function displayRandomAnimal() {
  if (remainingAnimals.length === 0) {
    displayEndMessage();
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingAnimals.length);
  const randomAnimal = remainingAnimals[randomIndex];

  displayQuestion(randomAnimal);

  let hintDisplayed = false;

  const $form = document.querySelector(".form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userAnswer = $form.querySelector(".form__input").value.trim();
    if (userAnswer.toLowerCase() === randomAnimal.answer.toLowerCase()) {
      alert("Correct!");
      remainingAnimals.splice(randomIndex, 1);
      displayAnimalImage(randomAnimal);
    } else {
      hintDisplayed = handleIncorrectAnswer(randomAnimal, hintDisplayed);
    }
  });
}

$startBtn.addEventListener("click", displayRandomAnimal);
