const animalGuessGame = [
  {
    id: 1,
    question: "I’m known as the king of the jungle. What am I?",
    hint: "My roar can be heard from miles away.",
    answer: "Lion",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
    alt: "A lion lying in the grass in Namibia",
  },
  {
    id: 2,
    question: "I carry my house on my back and move super slow. What am I?",
    hint: "I leave a slimy trail behind me.",
    answer: "Snail",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Snail_in_Singapore_Botanic_Gardens_-_20110807.jpg",
    alt: "A snail crawling on a green leaf",
  },
  {
    id: 3,
    question: "I’m black and white and loved for my bamboo diet. What am I?",
    hint: "I live in the mountains of China.",
    answer: "Panda",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    alt: "A giant panda eating bamboo",
  },
  {
    id: 4,
    question:
      "I hang upside down, sleep a lot, and move very slowly. What am I?",
    hint: "You’ll mostly find me in the rainforests of Central and South America.",
    answer: "Sloth",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Bradypus.jpg",
    alt: "A sloth hanging upside down on a tree branch",
  },
  {
    id: 5,
    question:
      "I have a long neck and spots, and I eat leaves from tall trees. What am I?",
    hint: "I’m the tallest land animal on Earth.",
    answer: "Giraffe",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg",
    alt: "A giraffe standing in the savannah",
  },
  {
    id: 6,
    question: "I’m the only mammal that can truly fly. What am I?",
    hint: "I come out mostly at night and may live in caves.",
    answer: "Bat",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Lesser_short_nosed_fruit_bat_%28Cynopterus_brachyotis%29.jpg",
    alt: "A fruit bat hanging upside down",
  },
  {
    id: 7,
    question:
      "You might see me in your yard, hopping around and eating bugs. I ribbit! What am I?",
    hint: "I start life as a tadpole.",
    answer: "Frog",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Common_frog_%28Rana_temporaria%29_2.jpg",
    alt: "A common frog sitting on a rock",
  },
  {
    id: 8,
    question:
      "I have eight legs and spin webs. Some people fear me! What am I?",
    hint: "I’m not an insect—I belong to the arachnid family.",
    answer: "Spider",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Garden_spider_1.jpg",
    alt: "A close-up of a garden spider on its web",
  },
  {
    id: 9,
    question: "I can change my color to blend into my surroundings. What am I?",
    hint: "I have eyes that can move in two directions at once.",
    answer: "Chameleon",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Yemen_Chameleon.jpg",
    alt: "A colorful Yemen chameleon on a branch",
  },
  {
    id: 10,
    question:
      "I’m the biggest animal in the ocean and I sing underwater. What am I?",
    hint: "I breathe through a blowhole, not gills.",
    answer: "Whale",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Humpback_Whale_underwater_shot.jpg",
    alt: "A humpback whale swimming underwater",
  },
];

const $startBtn = document.querySelector(`[data-btnType="btn-start"]`);
const $container = document.querySelector(".container");

$startBtn.addEventListener("click", () => {
  $container.innerHTML = `
    <div class="card">            
        <img class="card__image" src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg" alt="">
        <form class="form" action="">
            <label class="form__label"> Name this animal:</label>
            <input class="form__input" type="text">
            <input class="form__submit btn" type="submit" value="Guess">
        </form>
    </div>`;
    if(incorrectAnswer)
    addHint()
});

function addHint () {
    const $card = document.querySelector(".card")
    $card.insertAdjacentHTML("beforeend", 
        "<p>Hint:</p>"
    )
}
