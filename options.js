/* eslint-disable no-loop-func */
let page = document.getElementById('buttonDiv');

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(buttonColors) {
  for (let item of buttonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', () => {
      chrome.storage.sync.set({ color: item }, () => {
        console.log(`color is ${item}`);
      });
    });

    page.appendChild(button);
  }
}

constructOptions(kButtonColors);