let page1 = document.createElement('div');
page1.innerHTML = '1';
let page2 = document.createElement('div');
page2.innerHTML = '2';
let page3 = document.createElement('div');
page3.innerHTML = '3';
let page4 = document.createElement('div');
page4.innerHTML = '4';
const routeTable = {
    '1': page1,
    '2': page2,
    '3': page3,
    '4': page4
}
function route() {
    // let number = window.location.hash.slice(1);
    let number = window.location.hash.slice(1);
    number = number || 1;
    // let page = document.querySelector(`#page${number}`);
    // page = page || document.querySelector('#page404');
    let app = document.querySelector('#app');
    if(app.children.length > 0) {
        app.innerHTML = '';
    }
    // console.log(routeTable[number.toString()]);
    app.appendChild(routeTable[number.toString()]);
}