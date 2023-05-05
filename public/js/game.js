const answerForm = document.getElementById('answerForm');
const container = document.querySelector('.container');
if (container) {
  container.addEventListener('click', async (ev) => {
    if (ev.target.classList.contains('nextBtn')) {
      const { id } = ev.target.dataset;
      const res = await fetch(`/api/game/${id}`);
      // console.log('ihfadsbfoibasdoifubsaodif');
      const result = await res.text();
      console.log(result);
      if (res.ok) {
        const elem = document.querySelector('.containerForQuest');
        elem.firstChild.remove();

        elem.insertAdjacentHTML('afterbegin', result.html);
      }
    }
  });
}

if (answerForm) {
  answerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { answerUser } = e.target;
    const idQestion = e.target.dataset.id;
    const ans = answerUser.value;
    // console.log(ans, '+++++++++++++++++++++++++++++');

    const response = await fetch(`/api/game/${idQestion}/put`, {
      method: 'PUT',
      body: JSON.stringify({ ans }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    // console.log(result, '111111111111111111111111e1111111');
    if (response.ok) {
      // const divContainerQuest = document.querySelector('.containerForQuest');
      // console.log(divContainerQuest, '11111e11111111111');
      const elem = document.querySelector('.containerForQuest');
      elem.firstChild.remove();
      // console.log(elem.parentNode);
      elem.insertAdjacentHTML('afterbegin', result);
    }
  });
}
