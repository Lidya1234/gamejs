const scorelist = document.querySelector('.scorelist');
const refresh = document.querySelector('#refresh');
const playername = document.querySelector('#playername');
const playerscore = document.querySelector('#playerscore');
const save = document.querySelector('#save');

const game = { name: 'tictactoe' };
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(game)
// })
//   .then((response) => response.json())
//   .then((game) => {
//     console.log('Success:', game);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

save.addEventListener('click', () => {
  const player = {
    user: playername.value,
    score: playerscore.value
  };

  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9rEMlASXmae9ku2SAIEt/scores/', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(player)
  })
    .then((response) => response.json())
    .then((player) => {
      console.log('Success:', player);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

refresh.addEventListener("click" , ()=>
{  clearList(scorelist)
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9rEMlASXmae9ku2SAIEt/scores/')
  .then(response => response.json())
  .then(data => appendData(data));
})
const clearList = (list) => {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  };
function appendData(data) {
    
    for (var i = 0; i < data.result.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data.result[i].user + ' ' + data.result[i].score;
      scorelist.appendChild(div);
    }
  }

