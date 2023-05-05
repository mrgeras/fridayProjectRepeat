const mainBlock = document.querySelector('.mainBlock');
mainBlock.addEventListener('click', async (e)=>{
    if(mainBlock){
        e.target.classList.contains('show-theme');
const btn = e.target;
const div = btn.closest('.theme')
const id = div.dataset.id;
// console.log(id);
const response = await fetch(`/api/game/${id}`, {method: 'GET'} )
    }
})
const card = document.querySelector('.show-theme');
