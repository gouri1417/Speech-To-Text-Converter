# Speech-to-Text-Converter

## How the Project Works

### Objective
The goal of this project is to provide a simple **Speech-to-Text Converter** that listens to the user's voice through a microphone and converts it into text in real time, directly in the browser.

This tool is useful for:
- Dictating notes without typing
- Accessibility support for users who have difficulty typing
- Quick transcription of spoken content

### Setup
- This project is built using **HTML**, **CSS**, and **JavaScript** (Frontend only).
- It uses the **Web Speech API** (built into modern browsers) for real-time speech recognition.
- The UI is clean, responsive, and works directly in the browser without extra installations.

## Features

### Core Features
- **Real-time speech recognition**: Converts your voice into text as you speak.
- **Start/Stop control**: You can start and stop listening anytime.
- **Copy to Clipboard**: Quickly copy the converted text for use elsewhere.
- **Clear Text**: Reset the output area instantly.
- **Supports multiple languages** (default: English, easily changeable in code).

### UI/UX Features
- **Minimal and responsive design** using HTML & CSS.
- Large, readable text output area.
- Microphone button changes color when listening.
- Works on desktop and mobile browsers that support the Web Speech API.

## How It Works
1. When you click the **Start** button, the browser requests access to your microphone.
2. Once permission is granted, speech is captured and processed by the **Web Speech API**.
3. The recognized words appear instantly in the text box.
4. You can **copy** the text or **clear** it as needed.

## Future Improvements
- Add **save as .txt** option for downloaded transcripts.
- Add **dark mode** toggle for better readability at night.
- Provide **pause/resume** listening instead of full stop/start.
- Implement **offline speech recognition** (using external libraries or APIs).

## Installation

### Requirements
- A **modern browser** (Chrome, Edge, Firefox with Web Speech API support).
- A working **microphone** connected to your device.

### Steps to Run
1. **Clone the Repository**

   git clone https://github.com/gouri1417/Speech-To-Text-Converter.git
