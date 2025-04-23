## 🚻 Restrooms Near You
A user-friendly web app that helps you quickly find gender-neutral and accessible public restrooms near your current location. Powered by the Refuge Restrooms API, this app utilizes geolocation to display nearby restrooms, allowing you to view details, save favorites, and switch to a map view.

## 🧰 Features
📍 Location-based search for nearby restrooms

✅ Filter info like Accessibility and Unisex availability

💾 Save restrooms to your personal list

🗺️ Map View for spatial navigation

🔄 Refresh Button to reload results based on your current location

## 🚀 Getting Started
Clone the repo and install dependencies:

git clone https://github.com/JoevaScript1/restrooms-near-me.git
cd restrooms-near-you
npm install

## 🔐 Environment Variables
Create a .env file in the root directory and add the following:


PORT=2121 or any port you prefer, like 3000
DB_STRING=your_database_uri_here

## 🌐 Frontend Overview
The frontend is a simple HTML/CSS/JavaScript interface that:

Uses navigator.geolocation to get the user's position

Fetches nearby restrooms using the Refuge Restrooms API

Displays each restroom's name, address, distance, accessibility, and unisex status

Allows users to save restrooms to teir own list using a backend API




## 🛠 Tech Stack
Frontend: HTML, CSS, Vanilla JavaScript

Backend: Node.js, Express

Database: MongoDB

API: Refuge Restrooms API

## 📌 Notes
This app requires users to grant geolocation access

Intended for desktop and mobile browsers

Designed with accessibility and inclusivity in mind

## 🙌 Contributing
Contributions welcome! Open an issue or fork the repo and submit a pull request.

## 📄 License
This project is open-source and available under the MIT License.
