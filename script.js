// students.json-ийг JS дотор шууд массив болгон оруулж байна
const studentsData = [
  { "name": "Багш", "code": "0908", "role": "teacher" },
  { "name": "Х.Амарбаясгалан", "code": "1011" },
  { "name": "Т.Бархасбаяр", "code": "2319" },
  { "name": "Г.Мичидмаа", "code": "2205" },
  { "name": "Э.Эрдэнэтунгалаг", "code": "1228" },
  { "name": "Э.Билгүүнбаяр", "code": "2818" },
  { "name": "Б.Энхзаяа", "code": "3005" },
  { "name": "Б.Эрхэс", "code": "1043" },
  { "name": "Б.Цэлмэг", "code": "0618" },
  { "name": "Г.Тэмүүлэн", "code": "0315" },
  { "name": "С.Халиунаа", "code": "2225" },
  { "name": "Т.Даваабаатар", "code": "1117" },
  { "name": "А.Энхзул", "code": "0421" },
  { "name": "Ө.Хүслэнбаяр", "code": "0376" },
  { "name": "Х.Бадар-Ууган", "code": "0816" },
  { "name": "Н.Нандин-Эрдэнэ", "code": "2106" },
  { "name": "Б.Батцэцэг", "code": "0147" }
];

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('attendanceForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const code = document.getElementById('code').value.trim();
      const student = studentsData.find(s => s.code === code);

      if (student) {
        // Багш эсэхийг шалгах
        if (student.role === 'teacher') {
          window.location.href = 'teacher.html';
          return;
        }

        // Сурагчийн ирц бүртгэх
        const now = new Date();
        const timeString = now.toLocaleString('mn-MN');

        // localStorage-д ирц хадгалах
        let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || {};
        attendanceData[student.code] = timeString;
        localStorage.setItem('attendanceData', JSON.stringify(attendanceData));

        localStorage.setItem('studentName', student.name);
        localStorage.setItem('studentCode', student.code);
        window.location.href = 'motivation.html';
      } else {
        alert('Код буруу байна!');
      }
    });
  }

  // Бататгалын оноо хадгалах функц
  window.saveScore = function(studentCode, score) {
    let scoresData = JSON.parse(localStorage.getItem('scoresData')) || {};
    scoresData[studentCode] = score;
    localStorage.setItem('scoresData', JSON.stringify(scoresData));
  };
});
