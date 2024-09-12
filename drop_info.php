<?php
// Fetch the JSON data from the URL
$json = file_get_contents('https://cdn.forums.klei.com/drops/current_campaign.json');
$data = json_decode($json, true);

// Extract necessary information
$collectionName = $data["Don't Starve Together"]['collectionName'];
$englishName = $data["Don't Starve Together"]['englishName'];


// Format the message
$message = "Drops are active! You can associate your twitch.tv account to Klei Account. Simply head on over to https://accounts.klei.com. After that just watch the stream for the required time: Current Set - $collectionName - Icon (30 Minutes) - Portrait (1 Hour 30 Minutes) - $englishName (3 Hours). Be sure to collect your drop at https://www.twitch.tv/drops/inventory";

// Output the message
echo $message;
?>
