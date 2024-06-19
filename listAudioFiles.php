<?php

$directory = 'audio'; // Directory containing the audio files

// Scan the directory for files
$audioFiles = array_diff(scandir($directory), array('.', '..'));

// Encode the array into JSON format
$jsonData = json_encode($audioFiles, JSON_PRETTY_PRINT);

// Specify the path to save the JSON file
$jsonFile = 'audioFiles.json';

// Save the JSON data to the file
if (file_put_contents($jsonFile, $jsonData)) {
    echo "JSON file has been generated successfully.";
} else {
    echo "Error occurred while generating JSON file.";
}
