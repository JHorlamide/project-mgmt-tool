# Larno AI Assessment

## Quick install

After you clone the repo, follow these instructions:

1. Changed directory to the cloned repo directory `cd project-mgmt-tool`
2. Install packages
   `npm install`
3. Add environment variables

- create a `.env` file in the root of the folder
- copy the environmental variables from `.env.example` into `.env` and replace the following keys:
  - OPENAI_API_KEY="" (The key I used was given to me by Tunde)
  - PORT="" (default port used is 8080)

## Usage

To run the function simply run:

`npm run startFun`

To run the API server:

`npm start` and make an HTTP GET request to http://localhost:{PORT}/api/project-text-analyses using curl or any API testing tool.

## Credit

This repository heavily borrows from:

- [LangchainJS](https://github.com/hwchase17/langchainjs) - official langchain library
