document.addEventListener('DOMContentLoaded', function () {
    let page1 = document.querySelector('#page1');
console.log(page1);
const routeTable = {
    '1': page1,
    // '2': page2,
    // '3': page3,
    // '4': page4
}
function route() {
    // let number = window.location.hash.slice(1);
    let number = window.location.hash.slice(1);
    number = number || 1;
    console.log(number);
    let page = routeTable[number.toString()];
    console.log(page);
    // page = page || document.querySelector('#page404');
    // let app = document.querySelector('#app');
    // if(app.children.length > 0) {
    //     app.innerHTML = '';
    // }
    // console.log(routeTable[number.toString()]);
    // app.appendChild(page);
}
})