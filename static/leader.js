function getUsers() {
  fetch('https://codeforces.com/api/contest.standings?contestId=' + data)
    .then(res => res.json())
    .then(data => {
      let output1 = `<h1 style=color:red><center>${data.result.contest.name}</center></h1>
		  <h3>About Contest</h3>`;
      output1 += '<table class="table"><thead style=color:red><tr><th scope="col">#</th><th scope="col">Problem Name</th></tr></thead><tbody>';
      data.result.problems.forEach(function (user) {
        output1 += `
    <tr>
      <th scope="col" >${user.index}</th>
      <th scope="col">${user.name}</th>
    </tr>
		`;
      });
      output1 += '</tbody></table>';

      document.getElementById('output1').innerHTML = output1;
    })
}
document.getElementById('getSort').addEventListener('click', getSort);
function getSort() {
  fetch('https://codeforces.com/api/contest.ratingChanges?contestId=' + data)
    .then(res => res.json())
    .then(data => {
      let output = '<table class="table"><thead style=color:red><tr><th scope="col">Rank</th><th scope="col">Username</th><th scope="col">Old Rating</th><th scope="col">New Rating</th></tr></thead><tbody>';
      let from = document.getElementById('from').value - 1;
      let to = document.getElementById('to').value;
      let pop = data.result;
      if (from != -1)
        pope = pop.slice(from, to);
      else
        pope = pop;
      pope.forEach(function (user) {
        output += `
    <tr>
      <th scope="col" >${user.rank}</th>
      <th scope="col"><a href = "/profile?user=${user.handle}">${user.handle}</a></th>  
      <th scope="col">${user.oldRating}</th>
      <th scope="col">${user.newRating}</th>
    </tr>
		`;
      });
      output += '</tbody></table>';
      document.getElementById('output').innerHTML = output;
    })
}

function addComment() {
  var parameters = location.search.substring(1).split("?");

  var temp = parameters[0].split("=");
  data = unescape(temp[1]);
}
addComment();

