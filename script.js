const usersContainer = document.querySelector(".users-container");

const users = [
  {
    image: "../img/image1.png",
    name: "John Doe",
    email: "",
    age: "28 years old",
    info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
  },
  {
    image: "../img/image2.png",
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: "",
    info: "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes.",
  },
  {
    image: "",
    name: "",
    email: "mikebrown@example.com",
    age: "45 years old",
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions",
  },
  {
    image: "../img/image4.png",
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    age: "30 years old",
    info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country",
  },
  {
    image: "",
    name: "Alex Martinez",
    email: "",
    age: "27 years old",
    info: "",
  },
];

function returnCards(users) {
  return users
    .map(
      (user, index) => `
      <div class="user-container">
        <img src="${user.image}"  alt="User Image" class="user-image" />
        <div class="user-details">
            <h2 class="user-name">${user.name}</h2>
            <p class="user-email">${user.email}</p>
            <p class="user-age">${user.age}</p>
            <p class="user-info">${user.info}</p>
        </div>

        <a class="btn-close" onclick="deleteCard(${index})">&#128473;</a>
      </div>`
    )
    .join("");
}

function deleteCard(index) {
  users.splice(index, 1);
  cardsRender();
}

function cardsRender() {
  usersContainer.innerHTML = returnCards(users);
}

cardsRender();
