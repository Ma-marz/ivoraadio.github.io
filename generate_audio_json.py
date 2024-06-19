import os
import json

def generate_file_list(directory, output_file):
    try:
        # Get list of files in the directory
        files = os.listdir(directory)

        # Write file list to JSON
        with open(output_file, 'w') as f:
            json.dump(files, f, indent=4)

        print(f"JSON file '{output_file}' has been generated successfully.")

    except OSError as e:
        print(f"Error occurred while generating JSON file: {e}")

# Specify the directory containing the audio files
directory_path = 'audio'

# Specify the output JSON file
output_json_file = 'audioFiles.json'

# Generate JSON file with list of files in the directory
generate_file_list(directory_path, output_json_file)
