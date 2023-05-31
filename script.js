   function randomizeScore() {
      const scoreElement = document.getElementById('score');
      const goalsElement = document.getElementsByClassName('details')[0];
      goalsElement.innerHTML = '';

      const team1Name = document.getElementById('team1NameInput').value || 'Team 1';
      const team2Name = document.getElementById('team2NameInput').value || 'Team 2';
      document.getElementById('team1Name').textContent = team1Name;
      document.getElementById('team2Name').textContent = team2Name;

      const randomScore1 = Math.floor(Math.random() * 6);
      const randomScore2 = Math.floor(Math.random() * 6);

      scoreElement.textContent = randomScore1 + ' - ' + randomScore2;

      const team1Players = [
        document.getElementById('player1').value || 'Player 1',
        document.getElementById('player2').value || 'Player 2',
        document.getElementById('player3').value || 'Player 3',
        document.getElementById('player4').value || 'Player 4',
        document.getElementById('player5').value || 'Player 5',
        document.getElementById('player6').value || 'Player 6',
        document.getElementById('player7').value || 'Player 7',
        document.getElementById('player8').value || 'Player 8',
        document.getElementById('player9').value || 'Player 9',
        document.getElementById('player10').value || 'Player 10',
        document.getElementById('player11').value || 'Player 11'
      ];

      const team2Players = [
        document.getElementById('player12').value || 'Player 1',
        document.getElementById('player13').value || 'Player 2',
        document.getElementById('player14').value || 'Player 3',
        document.getElementById('player15').value || 'Player 4',
        document.getElementById('player16').value || 'Player 5',
        document.getElementById('player17').value || 'Player 6',
        document.getElementById('player18').value || 'Player 7',
        document.getElementById('player19').value || 'Player 8',
        document.getElementById('player20').value || 'Player 9',
        document.getElementById('player21').value || 'Player 10',
        document.getElementById('player22').value || 'Player 11'
      ];

      const randomGoalsCount = Math.floor(Math.random() * 6) + 1;

      for (let i = 0; i < randomGoalsCount; i++) {
        const randomTeamIndex = Math.random() < 0.5 ? 0 : 1;
        const randomPlayerIndex = Math.floor(Math.random() * 11);
        const playerName = randomTeamIndex === 0 ? team1Players[randomPlayerIndex] : team2Players[randomPlayerIndex];
        const goalTime = Math.floor(Math.random() * 90) + 1;
        const goalElement = document.createElement('div');
		const team1Logo = document.getElementById('team1Logo');
        const team2Logo = document.getElementById('team2Logo');
        let goalDetail = playerName + ' - ' + goalTime + "'";
        if (Math.random() < 0.2) {
          goalDetail += ' (P)';
        } else if (Math.random() < 0.2) {
          goalDetail += ' (OG)';
        }
        goalElement.textContent = goalDetail;
        goalsElement.appendChild(goalElement);
      }
    }
	
    function handleTeam1LogoUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const logo1URL = e.target.result;
        const team1Logo = document.getElementById('team1Logo');
        team1Logo.src = logo1URL;
      };

      reader.readAsDataURL(file);
    }

    function handleTeam2LogoUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const logo2URL = e.target.result;
        const team2Logo = document.getElementById('team2Logo');
        team2Logo.src = logo2URL;
      };

      reader.onload = function (e) {
        const logo1URL = e.target.result;
		const logo2URL = e.target.result;
        const team1Logo = document.getElementById('team1Logo');
        const team2Logo = document.getElementById('team2Logo');

        team1Logo.src = logo1URL;
        team2Logo.src = logo2URL;
      }

      reader.readAsDataURL(file);
    }