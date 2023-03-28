import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('body');
   const myIcon = new Image();
   myIcon.src = Icon;
   element.appendChild(myIcon);

   return element;
 }

 document.body.appendChild(component());
