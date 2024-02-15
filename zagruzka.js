const randon = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}


const btn = document.querySelector('#btn');

 btn.addEventListener('mouseenter', () => {
btn.style.left = `${randon(0, 90)}%`;
btn.style.top = `${randon(0, 90)}%`;
 });



 btn.addEventListener ('click', () => {
   alert('ono ne rabotaet')

 })