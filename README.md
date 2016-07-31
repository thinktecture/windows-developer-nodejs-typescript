# Windows Developer Node.js TypeScript Sample

This repository contains the code for the Windows Developer Node.js TypeScript sample.

## Requirements

* [Node.js](https://nodejs.org/en/), v6 preferred
  * Should be installed via Node Version Manager (nvm) to allow easily switching of different Node.js versions
  * [nvm for Mac OS X and Linux](https://github.com/creationix/nvm)
  * [nvm for Windows](https://github.com/coreybutler/nvm-windows)
  
## Usage

To start the sample, use `npm start`. 
It will automatically compile the sources and start the server. 
The server has two HTTP-based APIs:
 
* `GET /products`: Lists all products. Is empty by default.
* `POST /products`: Adds a new product to the server.
    * JSON must be sent in the body: 
    ```
    {
        "name": "Product name",
        "price": 100
    }
    ```
   
All data is stored in-memory, no other external dependencies are needed.

If you are interested in working with Node.js and HTTP-based APIs, take a look at the [Windows Developer Node.js Article Series repository](https://github.com/thinktecture/windows-developer-nodejs-article-series).
It contains more information about Node.js and working with Web APIs and databases.
