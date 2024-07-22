function submitQuiz() {
            const form = document.getElementById('quizForm');
            const name = document.getElementById('name').value;
            let score = 0;

            // Calculate score
            for (let i = 1; i <= 5; i++) {
                const selected = form.querySelector(`input[name="q${i}"]:checked`);
                if (selected) {
                    score += parseInt(selected.value);
                }
            }

            // Display score and name
            alert(`Hello, ${name}! Your score is ${score * 20}`);
        }
