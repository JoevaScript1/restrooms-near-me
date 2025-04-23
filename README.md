🚻 Restrooms Near You
A user-friendly web app that helps you quickly find gender-neutral and accessible public restrooms near your current location. Powered by the Refuge Restrooms API, this app utilizes geolocation to display nearby restrooms, allowing you to view details, save favorites, and switch to a map view.

🧰 Features
📍 Location-based search for nearby restrooms

✅ Filter info like Accessibility and Unisex availability

💾 Save restrooms to your personal list

🗺️ Map View for spatial navigation

🔄 Refresh Button to reload results based on your current location

🚀 Getting Started
Clone the repo and install dependencies:

bash
Copy
Edit
git clone https://github.com/yourusername/restrooms-near-you.git
cd restrooms-near-you
npm install
🔐 Environment Variables
Create a .env file in the root directory and add the following:

ini
Copy
Edit
PORT=2121 # or any port you prefer, like 3000
DB_STRING=your_database_uri_here
🌐 Frontend Overview
The frontend is a simple HTML/CSS/JavaScript interface that:

Uses navigator.geolocation to get the user's position

Fetches nearby restrooms using the Refuge Restrooms API

Displays each restroom's name, address, distance, accessibility, and unisex status

Allows users to save restrooms to their own list using a backend API

Here's a sample of how the app displays data:

html
Copy
Edit
<div class="restroom">
  <h2>Restroom Name</h2>
  <p><strong>Address:</strong> 123 Example St</p>
  <p><strong>City:</strong> Cityville</p>
  <p><strong>Distance:</strong> 0.42 miles</p>
  <p><strong>Accessible:</strong> Yes</p>
  <p><strong>Unisex:</strong> Yes</p>
  <button onclick="saveRestroom()">Save</button>
</div>
📡 Backend
The backend receives POST requests to save user-selected restrooms. Make sure to run the backend server on the same port you defined in .env (PORT=2121 by default).

Example endpoint:

http
Copy
Edit
POST /api/restrooms/save
Content-Type: application/json

{
  "name": "Restroom Name",
  "street": "123 Example St",
  "distance": 0.42,
  "accessible": true
}
🖼️ UI Navigation
Home shows restrooms near you

Refresh reloads nearby results

Map View shows restrooms on a map

View Saved Restrooms opens your saved list

🛠 Tech Stack
Frontend: HTML, CSS, Vanilla JavaScript

Backend: Node.js, Express

Database: MongoDB

API: Refuge Restrooms API

📌 Notes
This app requires users to grant geolocation access

Intended for desktop and mobile browsers

Designed with accessibility and inclusivity in mind

🧪 Future Improvements
Add user login and authentication

Enable restroom ratings and reviews

Add filters for changing table availability, cleanliness, etc.

Offline support with PWA enhancements

🙌 Contributing
Contributions welcome! Open an issue or fork the repo and submit a pull request.

📄 License
This project is open-source and available under the MIT License.
