const videos = [
  {
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    video_id: "GykTLqODQuU",
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk",
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY",
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As",
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o",
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI",
  },
];

const sectionCards = document.querySelector(".cards");
const containerModal = document.querySelector(".container-modal");
const modal = document.querySelector(".container-modal .modal");

function fetchCards() {
  videos.forEach((video) => {
    const html = `
    <div class="card" onclick="openModal('${video.video_id}')">
      <img src="${video.thumb}" />
      <div class="infos">
        <p>${video.title}</p>
        <div class="card-footer">
          <span>${video.duration}</span>
          <span>Free</span>
        </div>
      </div>
    </div>
    `;
    sectionCards.innerHTML += html;
  });
}

function openModal(id) {
  document.querySelector("iframe").src = `https://www.youtube.com/embed/${id}`;
  containerModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  containerModal.addEventListener("click", closeModal);
}
function closeModal(id) {
  containerModal.style.display = "none";
  document.body.style.overflow = "initial";
}

modal.addEventListener("focus", () => console.log("FOCO"));
modal.addEventListener("blur", () => console.log("SEM FOCO"));
document.querySelector(".modal > p").addEventListener("click", closeModal);

fetchCards();
