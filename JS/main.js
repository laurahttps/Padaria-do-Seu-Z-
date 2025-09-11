const hamburguer = document.querySelector('.menu-hamburguer');

const nav_links = document.querySelector('.nav-links');


hamburguer.addEventListener('click', () =>{
    nav_links.classList.toggle('active');
});


const nav_item = document.querySelectorAll('.nav-links a');

nav_item.forEach(item =>{
    item.addEventListener('click', ()=>{
        nav_links.classList.remove('active');
    });
});

/* FIM - hamburguer */
/* arrow-up */

const voltar_para_topo = document.querySelector('.voltar-ao-topo');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        voltar_para_topo.style.display = 'flex';
    } else {
        voltar_para_topo.style.display = 'none';
    }
});

/* FIM - arrow-up */    
/* Modal */

const modal = document.querySelector('#modal-exemplo');
const abrir = document.querySelector('.abrir-modal-btn');
const fechar = document.querySelector('.fechar-modal-btn');

abrir.addEventListener('click', () => {
    modal.style.display = 'block';
});

fechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

/* FIM - Modal */



