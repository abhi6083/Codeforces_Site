  document.getElementById('getUsers').addEventListener('click', getUsers);
	document.getElementById('getDetail').addEventListener('click', getDetail);
	
    function getUsers(){
      fetch('https://codeforces.com/api/contest.list?gym=false')
      .then(res => res.json())
      .then(data => {
		let output = '<h2></h2>';
		data.result.forEach(function(user) {
			output += `
			<ul>
			<li><a href="/leaderboard?user=${user.id}">${user.name}</a>
			</ul>
		`;
		});
		document.getElementById('output').innerHTML = output;
	})
    }
	
	function getDetail() {
		var handle = document.getElementById('handle').value;
		window.open('/profile?data=' + handle);		
		}
  