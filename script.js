document.addEventListener('DOMContentLoaded', function() {
  fetch('students.json')
    .then(res => res.json())
    .then(data => {
      const form = document.getElementById('attendanceForm');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          const code = document.getElementById('code').value.trim();
          const student = data.find(s => s.code === code);

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
    })
    .catch(error => {
      console.error('Файл уншихад алдаа гарлаа:', error);
    });

  // Бататгалын оноо хадгалах функц
  window.saveScore = function(studentCode, score) {
    let scoresData = JSON.parse(localStorage.getItem('scoresData')) || {};
    scoresData[studentCode] = score;
    localStorage.setItem('scoresData', JSON.stringify(scoresData));
  };
});