# YouTube Clone

A fully responsive YouTube Clone built with **React** and **Tailwind CSS**, connected to the YouTube API to fetch and display real-time video data. This project features core YouTube functionalities, including a video playback screen, recommended videos, and video details, providing users with a familiar viewing experience.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Screenshots](#screenshots)
- [License](#license)

---

## Features

- **Responsive Design**: Layout adjusts for desktop, tablet, and mobile screens.
- **Video Playback**: Displays video details like title, view count, like count, and description.
- **Recommendations Sidebar**: Shows related videos on the right, with separate sections for video thumbnails and details.
- **Watch Component**: Subdivided into `WatchPageVideoContainer`, `CommentSection`, and `RightSideBar` for a modular structure.
- **API Integration**: Fetches video data in real-time from the YouTube API.
  
---

## Technologies

- **React**: Frontend framework
- **Tailwind CSS**: Styling
- **Vercel**: Deployment
- **YouTube API**: Video data

---

## Setup and Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/username/youtube-clone.git
   cd youtube-clone
   ```
2. **Install dependencies**:
   ```npm install  ```
3. **Set up environment variables**:
    REACT_APP_BASE_URL=Your YouTube API Base URL
   
    REACT_APP_API_KEY=Your YouTube API Key
   
    These environment variables are referenced in the youtube.js file located in the constants folder.
5. **Start the app**:
    ```npm start```

## Screenshots

#### Main page:
![Main_page](https://github.com/user-attachments/assets/b7e33ea0-2267-4a47-9b55-c1f5fcdc870c)

#### Navbar toggle:
![ToggleNavBar](https://github.com/user-attachments/assets/ee68f3b7-2083-48e0-aa91-bd2bb354340c)

#### Watch page and Recommendations section:
![Watch_page1](https://github.com/user-attachments/assets/38a5baf5-40de-4e60-856e-c7942fba6a86)

#### Comment Section:
![Watch_2](https://github.com/user-attachments/assets/17f2d4dc-8000-4e93-88cc-958697c12a00)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
