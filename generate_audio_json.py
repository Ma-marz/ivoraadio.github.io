import os
import json

def generate_file_list(directory, output_file):
    try:
        # List to store all files with their relative paths
        files_list = []

        # Walk through directory and subdirectories
        for root, dirs, files in os.walk(directory):
            for file in files:
                # Get the relative path of the file
                relative_path = os.path.relpath(os.path.join(root, file), directory)
                if relative_path != ".DS_Store":
                    files_list.append(relative_path)

        # Write file list to JSON
        with open(output_file, 'w') as f:
            json.dump(files_list, f, indent=4)

        print(f"JSON file '{output_file}' has been generated successfully.")

    except OSError as e:
        print(f"Error occurred while generating JSON file: {e}")

# Specify the directory containing the audio files
directory_path = 'audio'

# Specify the output JSON file
output_json_file = 'audioFiles.json'

# Generate JSON file with list of files in the directory and subdirectories
generate_file_list(directory_path, output_json_file)
