# Upload

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# File Upload App

This project demonstrates a basic Angular application with Bootstrap for styling, which includes a file upload feature and a swipe-to-upload button. A Node.js backend server handles the file uploads and serves the uploaded PDF files.

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Project Walkthrough](#project-walkthrough)

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

git clone https://github.com/vaishalichaudhary2903/FileUpload.git
cd upload

### 2. Install Angular Dependencies

npm install

### 3. Run the Angular Application
ng serve
The application will be available at http://localhost:4200.

## Project Walkthrough

### 1. App component - File Upload feature:

Located in src/app.
app.component.html: Contains the layout for the file drop section and upload button.
app.component.ts: Handles file selection, drag-and-drop functionality, and uploading files to the backend server.
app.component.css: Styles the file drop section and swipe button.

### 2. File Upload Process:

Click or drag a file into the rectangular drop area to select a file.
The file input field is hidden; clicking the drop area triggers a file selection.
When a file is dropped or selected, it is stored in the selectedFile property.

Uploading and Viewing Files:

Click the "Swipe to Upload" button to send the selected file to the backend server via POST call and the file it is displayed under "Uploaded Document".
