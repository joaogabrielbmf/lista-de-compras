const form = document.getElementById("form");
const input = document.getElementById("add-item-input");
const lista = document.querySelector("ul");
const alerta = document.getElementById('alerta');
const removido = document.querySelector('#removido')
const fechar = document.querySelector('#fechar')
const li = document.querySelectorAll('li');
let timer;


form.addEventListener("submit", (event)=>{
 event.preventDefault();
 const newItem = input.value;
 const nomeProdutoCriado = newItem;

 if (newItem.trim()==="") {
    alerta.classList.remove('hidden');
    setTimeout(()=>{
        alerta.classList.add('hidden')
    }, 3000)
    event.preventDefault();
    return
 }
 const template = document.getElementById('item-template')
 const clone = template.content.cloneNode(true);
 


clone.querySelector('.item-name').textContent=newItem;

clone.querySelector('.btn-del').addEventListener('click', (e)=>{
    removido.querySelector('span').textContent = `O item ${nomeProdutoCriado} foi removido`
    e.target.closest('li').remove();
    removido.classList.remove('hidden');
    clearTimeout(timer)
    timer = setTimeout(()=>{
    removido.classList.add('hidden')
    },3000)
 })

clone.querySelector('input[type="checkbox"]').addEventListener('change', (e)=>{
    e.target.closest('li').classList.toggle('line-through');
  })

 lista.append(clone);
 input.value = "";
})


document.querySelectorAll('.btn-del').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const liPai = e.target.closest('li');
    const nomeProduto = liPai.querySelector('span').textContent;
    removido.querySelector('span').textContent = `O item ${nomeProduto} foi removido`;
    liPai.remove();

    // Lógica do timer
    removido.classList.remove('hidden');
    clearTimeout(timer);
    timer = setTimeout(() => {
      removido.classList.add('hidden');
    }, 3000);
  });
});



fechar.addEventListener('click', ()=>{
    removido.classList.toggle('hidden');
})

document.querySelectorAll('input[type="checkbox"]').forEach((check)=>{
  check.addEventListener('change', (e)=>{
    e.target.closest('li').classList.toggle('line-through');
  })
})

