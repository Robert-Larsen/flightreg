# Flightreg

Very simple app to read (and soon add...) data about flights into a Firestore database.

### Get started
1. `npm install`
2. `npm run build`
3. `npm run dev`
4. Visit http://localhost:5173

### Local development
There is currently no other option than running against the actual Firestore database. 
Create a file `.env` and add these variables to it:

| Variable     | Value |
|--------------| ----- |
| VITE_API_KEY | <api-key> |
| VITE_AUTH_DOMAIN | flightreg-v2.firebaseapp.com |
| VITE_PROJECT_ID | flightreg-v2 |
| VITE_STORAGE_BUCKET | flightreg-v2.appspot.com |
| VITE_MESSAGING_SENDER_ID | <message-sender-id> |
| VITE_APP_ID | <app-id> |