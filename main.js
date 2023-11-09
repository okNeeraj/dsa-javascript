import './style.css'
import App from './src/app'
document.querySelector('#app').innerHTML = `
  <div>
    <h1>🔥 Hello DSA!</h1>
    <button id="getResult" type="button">Get Result</button>
  </div>
`;

App();

