import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#dinosaurs').click(function() {
  let xhr = new XMLHttpRequest();
  const url = `https://dinoipsum.com/api/?format=html&words=10&paragraphs=3`

  xhr.open('GET',url, true);
  xhr.onload = function() {
    if (this.status === 200) {
      document.querySelector('.container').innerHTML = this.response;
    } else {
      console.log('Where did all the dinosaurs go?');
    }
  };
 xhr.send();
})

