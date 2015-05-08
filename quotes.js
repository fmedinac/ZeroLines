var colors = [
			'#16a085',
			'#2980b9',
			'#34495e',
			'#d35400',
			'#7f8c8d',
			'#c0392b'
		];

		var lines = [
			'Novato tem que se fuder.',
			'No final, todo mundo vai me dar razão.',
			'Almoçar com muita gente é uma merda, nunca dá certo.',
			'Essa juventude de hoje é muito mimada.',
			'Tá achando que a vida é assim?',
			'Cabô, cabô, cabô.',
			'Você conhece um desenvolvedor?',
			'A culpa, é do desenvolvedor.',
			'Eu to indo embora.',
			'Não sei, se vira aí',
			'Que bagunça é essa aqui?',
			'Só te digo o seguinte, nesse tempo que você ta fazendo isso aí já tinha feito 5 telas.',
			'Você sabe fazer um bot?',
			'Tá se divertindo Alexis!?',
			'Não, não, não, não, não. Não.',
			'Eu to preparado sempre.',
			'Que aula hein.. que aula.',
			'Nossa o Júlio é tão engraçado..',
			'Faltar uma pelada depois de confirmar, só em caso de extrema urgência.',
			'Não é Marcos?',
			'Que que é isso Marcola!?',
			'Tem que tá focado.',
			'Porra.',
			'Ninguém mais tem compromisso com absolutamente nada!',
			'Tá de folga?',
			'Ta fazendo freela!?'
		];

		function random(array) {
			return array[Math.floor(Math.random() * array.length)];
		}

		document.getElementById('line').innerHTML = '"' + random(lines) + '"';
		document.body.style.backgroundColor = random(colors);