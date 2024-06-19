<?php
$directory = 'audio'; // Directory containing the audio files
$audioFiles = array_diff(scandir($directory), array('.', '..'));
echo json_encode(array_values($audioFiles));
