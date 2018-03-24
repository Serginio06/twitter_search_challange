
<h1>Twitter Search App</h1>

## Table of contents
  * [Problem setting](#problem-setting)
  * [Scripts](#scripts)
  * [Folder structure](#folder-structure)
  * [Locators](#locators)
  * [Logging](#logging)
  * [DB Settings](#db-settings)
  * [Authentication](#authentication)
  * [Minimum Requirements](#minimum-requirements)
    ** [Minimum Requirements](#minimum-requirements)

## Problem setting

Build an app which uses Twitter API. 
This app must know how to:

login the user through API;
search tweets by hashtag;
display search results.

Final application must be represented as Single Page Application (SPA). The user interface should be clear, simple and well understandable.

Your application should be based on or utilize following technologies:

ES6;
ReactJS;
Redux;
Material Design Lite or Material-UI;
Any kind of build system;
WEB Component approach
REST-API Back-end should be written using Node.JS and based on your favourite framework like Express/sails etc.

Backend build on any popular FAAS will be reckoned as an advantage.

The final result must contain just 2 links:

Link to GitHub project containing result code & instructions of deployment process
Test link with deployed app

Code should be well commented in English.
 
  
## Scripts

 <b>"dbUp"</b> - make migratin for initial DB state,<br/>
 <b>"clean"</b> - clean build folder,<br/>
 <b>"start"</b> - create build and run nodeMon to watch changes,<br/>
 <b>"buildServer"</b> - use babel to create build folder,<br/>
 <b>"nodemonServer"</b> - start watching for file changes in /src and re-run server,<br/> 
 <b>"server"</b> - run server from /build without watching for changes.<br/>


## Folder structure

  <b>config</b> - configuration files<br/>
  <b>logs</b> - folder for log4js logs<br/>
  <b>migrations</b> - migrations for db<br/>
  <b>source/client</b> - client files<br/>
  <b>source/server/src/constants</b><br/>
  <b>source/server/src/controllers</b><br/>
  <b>source/server/src/converter</b> - data converter to read/write from/in DB<br/>
  <b>source/server/src/error</b> - user error handler<br/>
  <b>source/server/src/middleware</b> - different middleware (e.g authenticateMiddleware)<br/> 
  <b>source/server/src/models</b> - db models for mongoose schema<br/>
  <b>source/server/src/routes</b> - application route functions<br/>
  <b>source/server/src/templates</b> - mail templates<br/>
  <b>source/server/src/util</b> - custom utilities<br/>
  <b>source/server/src/view</b> - application pages<br/>
  
  
## Locators

   There are ServiceLocator and ModelLocator used. Please read this article if you are not 
   familiar with this design pattern https://msdn.microsoft.com/en-us/library/ff648968.aspx 
      
  
## Logging
  
  log4js configured to write log. It creates two files .csv and .log.with same data. CSV created 
  for more convenient way to filtering and sorting logs with Excel spreadsheet. 
  To track every request from receiving on the server and up to response there is requestMiddlewre
   applied using utils/getUniqueIdentifier utility to attache unique ID (md5 generator used) to 
   req object and release it as request to the user send. It use object pool to keep all ID 
   currently processing on the server. After processing it release ID from pool. So you may 
  track time taking every request (use filter and sorting in CSV file ). As well you may find ID that 
  were not released for some reason and stuck in our pool so transaction was not processed by 
  server. You want to investigate reasons of such cases to find failed scenarios.  
   
   
## Authentication
  
  You may login with userName/Password or use authentication provider as facebook.  
  
  
### DB Settings

<b>URL</b>

```sh
DB_URI=mongodb://127.0.0.1:27017/local
```
To start local mongoDb instance create folder mongodb in root folder and launch mongo daemon:<br/>
<b>$ mongod --dbpath mongodb,<br/>

Defaults to `mongodb://127.0.0.1:27017/local` for local run or mongodb://mongo:27021/local for docker-compose (see yml file)

   
## Migrations
  
  Migration framework <a href='https://www.npmjs.com/package/db-migrate' > db-migrate </a> uses to 
  migrate initial data or update db structure.<br/>
  <br/>
  
## Minimum Requirements
  
  ### <a href='https://nodejs.org/en/'>[Node 8](https://nodejs.org/en/)</a>
  
  I use Node 8.9.4 to power the API server in development and production.
  
  ### <a href='https://www.docker.com/community-edition'>[Docker](https://www.docker.com/community-edition)</a>
  
  Docker is required to develop this server. We use docker-compose to launch an isolated version 
  of the api-server and the db.
  
---
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  