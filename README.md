# Flightreg

Very simple app to read (and soon add...) data about flights into a Firestore database.

### Get started
1. `npm install`
2. `npm run build`
3. `npm run dev`
4. Visit http://localhost:5173

### Local development

Run the emulators locally with:

```
npm run emulators
```

Open another terminal tab or window and run:

```
npm run dev
```

Data produced in the emulators will be cleared when shutting the emulators down. You can store the current state by running
```
npm run emulators:export
```

### Deployment

The app is automatically deployed on push to `main` using GitHub Actions.
