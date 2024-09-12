// Fetch the JSON data from the URL
fetch('https://cdn.forums.klei.com/drops/current_campaign.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Extract necessary information
        const collectionName = data["Don't Starve Together"]['collectionName'] || 'Unknown Collection';
        const englishName = data["Don't Starve Together"]['englishName'] || 'Unknown Name';


        // Format the message
        const message = `Drops are active! You can associate your twitch.tv account to Klei Account. Simply head on over to https://accounts.klei.com. After that just watch the stream for the required time: Current Set - ${collectionName} - Icon (30 Minutes) - Portrait (1 Hour 30 Minutes) - ${englishName} (3 Hours). Be sure to collect your drop at https://www.twitch.tv/drops/inventory`;

        // Output the message
        console.log(message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
