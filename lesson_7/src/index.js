import './css/style.css'
import './css/index.scss'
import avg from './some.js'

const a = avg(5, 4, 3);

let div = document.createElement('div');
div.innerHTML = 'Lesson 7';
document.querySelector('body').appendChild(div);
console.log(a);
