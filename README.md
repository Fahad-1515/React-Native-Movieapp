# Movie Browser App

This is a simple movie browsing app built with **React Native CLI** and **TypeScript**.  
The app uses the **TMDB public API** to show movies and demonstrates common real-world features like search, pagination, bookmarks, and data persistence.

This project was created as part of a **React Native Fresher application task**.

---

## What the App Does

- Shows a list of popular movies on the Home screen
- Supports infinite scrolling (pagination)
- Allows users to search for movies
- Lets users bookmark movies
- Saves bookmarks locally so they are restored after app restart
- Has multiple screens with proper navigation

---

## Screens

- **Home** – Popular movies with infinite scroll
- **Search** – Search movies using TMDB API
- **Bookmarks** – View saved movies
- **Details** – View movie title and overview

---

## Tech Used

- React Native CLI (no Expo)
- TypeScript
- Redux Toolkit for state management
- React Navigation (Stack + Bottom Tabs)
- AsyncStorage for local data storage
- TMDB public API
- Only core React Native components (no UI libraries)

---

## How to Run the App

1. Clone the repository

```bash
git clone https://github.com/your-username/movie-browser-app.git
cd movie-browser-app

## Install dependencies

>> npm install @react-navigation/native      
>> npm install @react-navigation/native-stack
>> npm install @react-navigation/bottom-tabs
>> npm install react-native-screens react-native-safe-area-context
>> npm install @reduxjs/toolkit react-redux
>> npm install @react-native-async-storage/async-storage

## To Run in split terminal

  First Terminal

- npm start

  Second Terminal

- npm run android
