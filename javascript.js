
// 🌟 localStorage-оос сурагчийн нэр
const studentName = localStorage.getItem('studentName') || "Сурагч";
document.getElementById('welcome').innerText = `Сайн байна уу, ${studentName}!`;

// Сэдэв болон дэд сэдвүүд
const topics = {
  math: {
    name: "Математик",
    subtopics: [
      { title: "Тооны үндэс", image: "images/images/math.jpg", description: "Энэ хэсэгт бид тооны үндэсийг судална." },
      { title: "Нэмэх, хасах", image: "images/add_subtract.jpg", description: "Нэмэх, хасах үйлдлийг давтан хийнэ." }
    ]
  },
  history: {
    name: "Түүх",
    subtopics: [
      { title: "Монголын түүх", image: "images/images/history.jpg", description: "Монгол улсын түүхэн замнал." },
      { title: "Дэлхийн түүх", image: "images/world_history.jpg", description: "Дэлхийн чухал түүхэн үйл явдлууд." }
    ]
  }
};

// Сэдвийг сонгоход дэд сэдвүүдийг харуулах
const topicSelect = document.getElementById('topic-select');
const subtopicContainer = document.getElementById('subtopic-container');

topicSelect.addEventListener('change', () => {
  const selected = topicSelect.value;
  subtopicContainer.innerHTML = "";

  if (selected && topics[selected]) {
    topics[selected].subtopics.forEach(sub => {
      const card = document.createElement('div');
      card.className = "card";
      card.innerHTML = `
        <img src="${sub.image}" alt="${sub.title}">
        <h3>${sub.title}</h3>
        <p>${sub.description}</p>
      `;
      // Сонгосон дэд сэдвээр үйлдэл хийх (жишээ: alert)
      card.onclick = () => alert(`${sub.title} сэдэвийг сонголоо!`);
      subtopicContainer.appendChild(card);
    });
  }
});
