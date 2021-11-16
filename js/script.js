console.log("Warsztat - Ustaw tło elementów HTML");

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    
    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');
}

let btnSetBackround = document.getElementById('set-background');

btnSetBackround.addEventListener('click', setBackground);
