# BBCS December Hackathon - Generositree
Welcome to Generositree! This holiday season is all about giving and spreading joy. Yet, each year, countless underprivileged individuals around the world are unable to join in the fun. We aim to address this through Generositree, a web application that allows users to donate to a variety of charitable organisations in Singapore. What makes it special? The experience is gamified with a digital Christmas tree that grows as your total donation increases. If you're feeling generous and want to give back to the community this festive season or just looking for a fun way to create your own digital Christmas tree, Generositree is for you!

# Features
- **Donate**: Easily browse and donate to a curated list of trusted charitable organisations.
- **Digital Christmas Tree**: Donate and watch your digital christmas tree grow!

# Getting Started 
## Prerequisites
Before running the application, ensure that the following dependencies are installed:

- Node.js
- bcrypt
- dotenv
- express
- jsonwebtoken
- mysql2
- npm (Node Package Manager)
- nodemon

## Installation
1. **Clone the repository**: Clone this repository to your local machine.

   ```shell
   git clone https://github.com/Infvrno/BBCS-Dec-Hackathon-Grp27
   ```

2. **Navigate to the repository**: Change to the repository's directory.

   ```shell
   cd your-repository-name
   ```

3. **Install dependencies**: Install the necessary dependencies by running the following command.

   ```shell
   npm install
   ```
4. **Start the application**
    ```shell
   npm start
   ```

## Run the application
1. Initialise the MySQL database by using the `npm run init_tables` script defined in the `package.json` file
2. Depending on your needs, you can either use `npm start` or `npm run dev` to start up the server. `npm run dev` comes with the added advantage of automatic restarts which is particularly useful during development. Note: navigate to localhost:3000 on your preferred web browser to view the website!

## Install Dependencies
1. Open the terminal in Visual Studio Code by going to `View` > `Terminal` or using the shortcut `Ctrl + ``.
2. Navigate to the project root directory.
3. Install the required dependencies using npm:

   ```
   npm install
   ```
   
## Database Initialization
1. Make sure you have a MySQL database available for the application. Update the database configuration details in the `.env` file.
2. To initialize the database tables and populate them with sample data, open the terminal in Visual Studio Code and run the following command:

   ```
   npm run init_tables
   ```

# Package.json Script Explanation
The `package.json` file contains a set of scripts that can be executed using the `npm run` command. These scripts automate various tasks and provide shortcuts for common operations. Here is an explanation of the scripts defined in the provided `package.json` file:

- **init_tables**: This script is responsible for initialising the database tables before running the application.

- **start**: This script is used to execute a startup script without typing its execution command.
  
- **dev**: This script executes the dev script and typically starts a development server with live reloading.

You can run these scripts using the `npm run` command followed by the script name. For example, to run the init_tables script, you would execute `npm run init_tables`. Similarly, you can run other scripts like `npm run dev`. 

## Usage
1. **Sign Up**: Create your personal profile to get started and join the Generositree community
2. **Donate**: Browse through a list of trusted charitable organisations and make a donation to the cause that resonates with you.
3. **Grow Your Tree**: Watch your digital Christmas tree grow with every donation you make!
