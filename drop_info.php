<?php
// Fetch the JSON data from the Klei URL
$json = file_get_contents('https://cdn.forums.klei.com/drops/current_campaign.json');

// Decode the JSON data into an associative array
$data = json_decode($json, true);

// Extract the 'collectionName' and 'englishName'
$collectionName = $data['Don\'t Starve Together']['collectionName'];
$englishName = $data['Don\'t Starve Together']['englishName'];

// Return the result as plain text
echo "collectionName: $collectionName, englishName: $englishName";
?>
