const answerForm = document.getElementById('answerForm');

if (answerForm) {
  answerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { answerUser } = e.target;
    const idQestion = e.target.dataset.id;
    const ans = answerUser.value;
    console.log(ans, '+++++++++++++++++++++++++++++');

    const response = await fetch(`/api/game/${idQestion}/put`, {
      method: 'PUT',
      body: JSON.stringify({ ans }),
      headers: { 'Content-Type': 'application/json' },
    });
  });
}
