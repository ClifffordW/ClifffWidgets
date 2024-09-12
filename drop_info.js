fetch('https://cdn.forums.klei.com/drops/current_campaign.json')
    .then(response => response.json())
    .then(data => {
        const collectionName = data["Don't Starve Together"]['collectionName'];
        const englishName = data["Don't Starve Together"]['englishName'];

        const message = `Drops are active! You can associate your twitch.tv account to Klei Account. Simply head on over to https://accounts.klei.com. After that just watch the stream for the required time: Current Set - ${collectionName} - Icon (30 Minutes) - Portrait (1 Hour 30 Minutes) - ${englishName} (3 Hours). Be sure to collect your drop at https://www.twitch.tv/drops/inventory`;

        console.log(message);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
