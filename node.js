const express = require('express');
const app = express();
app.use(express.json());

app.post('/submit-answer', (req, res) => {
  const { name, answer, question } = req.body;
  console.log(`Сурагч: ${name}, Бодлого: ${question}, Хариулт: ${answer}`);
  // Энд та Google Sheet эсвэл базаар хадгалах боломжтой
  res.json({ status: "Амжилттай илгээгдлээ" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
