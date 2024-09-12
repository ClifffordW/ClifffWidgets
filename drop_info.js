const fetch = require('node-fetch');

exports.handler = async (event) => {
  const url = 'https://cdn.forums.klei.com/drops/current_campaign.json';
  const response = await fetch(url);
  const data = await response.json();
  const gameData = data["Don't Starve Together"];
  const collectionName = gameData.collectionName;
  const englishName = gameData.englishName;

  const message = `Drops are active! You can associate your twitch.tv account to Klei Account. Simply head on over to https://accounts.klei.com After that just watch the stream for the required time: Current Set - ${collectionName} - Icon (30 Minutes) - Portrait (1 Hour 30 Minutes) - ${englishName} (3 Hours). Be sure to collect your drop at https://www.twitch.tv/drops/inventory`;

  return {
    statusCode: 200,
    body: message,
  };
};
