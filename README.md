# 🧠 Betting Websites Monitor Chrome Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📌 Features
- **Website Monitoring**: Tracks visits to specified betting websites
- **SMS Notification**: Sends SMS alerts to parent's phone
- **Voice Call Alert**: Initiates voice calls with alert messages
- **Customizable**: Easily configure target websites and alerts

## 🛠️ Tech Stack
- **Frontend**: Chrome Extension (Manifest v3), JavaScript
- **Backend**: Python, Flask
- **Communication**: Twilio API (SMS & Voice)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Tejoooo/BettingAppExtension.git
cd BettingAppExtension
```

### 2. Backend Setup
```bash
pip install flask twilio python-dotenv
```

Create a `.env` file with your Twilio credentials:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE=+1234567890
PARENT_PHONE=+0987654321
```

Run the server:
```bash
python app.py
```

### 3. Chrome Extension Setup
1. Go to `chrome://extensions/`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the extension directory

## 🧪 How It Works
- The extension detects visits to betting websites
- Sends notification to Flask backend
- Backend uses Twilio to send SMS and make calls to parent

## ✏️ Customization
Change target websites in `background.js` and `content.js`:
```javascript
const targetSites = ["www.examplebetting1.com", "www.examplebetting2.net"];
```

## 📋 License
This project is licensed under the MIT License.

## 🙌 Credits
Built with Flask, Twilio, and Chrome Extension APIs