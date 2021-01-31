let solarSystem = [
        { 'name': 'Mercury', 'moons': 0, 'color': 'orange'},
        { 'name': 'Venus', 'moons': 0, 'color': 'grey'},
        { 'name': 'Earth', 'moons': 1, 'color': 'blue'},
        { 'name': 'Mars', 'moons': 2, 'color': 'red'},
        { 'name': 'Jupiter', 'moons': 79, 'color': 'brown'},
        { 'name': 'Saturn', 'moons': 62, 'color': 'yellow'},
        { 'name': 'Uranus', 'moons': 27, 'color': 'lightblue'},
        { 'name': 'Neptune', 'moons': 14, 'color': 'darkblue'},

        ]

        for(planet of solarSystem){
            let planetDiv = document.createElement('div');

            planetDiv.classList.add('planet');
            planetDiv.innerHTML = planet.name;

            let i = 1;
            let moonDiv;

            while (i <= planet.moons){

                moonDiv = document.createElement('div');
                moonDiv.classList.add('moon');

                let moveMoon = (i * 30) + 90 + 'px';
                moonDiv.style.left = moveMoon;

                moonDiv.style.backgroundColor = 'white';

                planetDiv.appendChild(moonDiv);

                i++;
            }

            planetDiv.style.backgroundColor = planet.color;
            document.body.appendChild(planetDiv);
        }