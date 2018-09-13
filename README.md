# Mobile Web Specialist Certification Course
---
## Purpose
An exercise project that I used to become reoriented in developing websites in JavaScript as well as training myself to become specialized Mobile Web Application development. 

This is a three part Udacity course where I will incrementally convert a static webpage to a mobile-ready web application. 

### How to Run Project
1. [Fork and Clone this project](https://github.com/jannaee/mws-restaurant-stage-1.git)

2. Install/Update project dependancies
```Install project dependancies
# npm i
```
3. Install Sails.js globally
```Install sails global if it is not installed already
# npm i sails -g
```
4. Start the server
```Start server
Go to /server directory and run
# node server
```
5. To access API server environment
```debug: Environment : development
```debug: Port        : 1337

6. To Access development server
```Install python, (I built this application using version 3.6.5)
Go to root of project and run this in CLI
# python -m httpserver 8000 or python -m http.server 8000
```

### Specifications about project
* Python version 3.6.5
* Sails version v0.12.14
* Git 2.18.0.windows.1
* [leafletjs](https://leafletjs.com/) 1.3.4 - (an open-source JavaScript library for mobile-friendly interactive maps)
* [Mapbox](https://www.mapbox.com/) - a Live Location Platform
* ES6
> Most of the code is from the starter code written by Udacity's and according to ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as I can I will try to maintain use of ES6 in any additional JavaScript I write. 
---

#### _Restaurant Reviews - A Three Stage Udacity/Google Course_

## Project Overview: STAGE 1 CRITERIA

### Responsive Design

- [x] Site UI compatible with a range of display sizes - Content should make use of available screen real estate and should display correctly at all screen sizes.
- [x] Image's associated title and text renders next to the image in all viewport sizes.
- [x] Images are responsive - Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
- [x] Application elements visible and usable in all viewports - On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

### Accessibility

- [x] Images are accessible - All content-related images include appropriate alternate text that clearly describes the content of the image.
- [x] Focus used appropriately to allow easy navigation of the site - Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
- [x] Site elements defined semantically - Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

### Offline Availability

- [x] Pages that have been visited available offline - When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.
---

## Project Overview: STAGE 2 CRITERIA

### Application Data and Offline Use

- [x] Application Data Source - The client application should pull restaurant data from the development server, parse the JSON response, and use the information to render the appropriate sections of the application UI.
- [x] Offline Use - The client application works offline. JSON responses are cached using the IndexedDB API. Any data previously accessed while connected is reachable while offline.

### Responsive Design and Accessibility

- [x] Responsive Design - The application maintains a responsive design on mobile, tablet and desktop viewports.
- [x] Accessibility - The application retains accessibility features from the Stage 1 project. Images have alternate text, the application uses appropriate focus management for navigation, and semantic elements and ARIA attributes are used correctly.

### Performance
- [x]  Site Performance - Lighthouse targets for each category exceed:
    * Progressive Web App: >90
    * Performance: >70
    * Accessibility: >90
---

## Project Overview: STAGE 3 CRITERIA

### User Interface

- [ ] Users are able to mark a restaurant as a favorite, this toggle is visible in the application. A form is added to allow users to add their own reviews for a restaurant. Form submission works properly and adds a new review to the database.

### Offline Use

- [ ] The client application works offline. JSON responses are cached using the IndexedDB API. Any data previously accessed while connected is reachable while offline. User is able to add a review to a restaurant while offline and the review is sent to the server when connectivity is re-established.

### Responsive Design and Accessibility

- [ ] Responsive Design - The application maintains a responsive design on mobile, tablet and desktop viewports. All new features are responsive, including the form to add a review and the control for marking a restaurant as a favorite.

- [ ] Accessibility - The application retains accessibility features from the previous projects. Images have alternate text, the application uses appropriate focus management for navigation, and semantic elements and ARIA attributes are used correctly. Roles are correctly defined for all elements of the review form.

### Performance
- [ ]  Site Performance - Lighthouse targets for each category exceed:
    * Progressive Web App: >90
    * Performance: >90
    * Accessibility: >90
