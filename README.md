#Pangaea Notification
A simple http notification service

##Prerequisite
The Node Package Manager `npm` is required to run this project

##Installation
Using your preferred terminal app
- Clone the project using `git clone git@github.com:Gosilama/pangaea-notification.git`
- Navigate to project root `cd pangaea-notification`
- Run `sh start-server.sh`
- When the app is done compiling you should see `Publisher running on port 8000` and `Subscriber running on port 9000`  messages
- The publisher server is available at `http://localhost:8000`
- The subscriber server is availabe at `http://localhost:9000`

##Test
- Run `npm test`

##Using the Service
###subscribing
Endpoint: **/subscribe/:topic**, Action: **POST** <br />To subscribe to a topic, pass a valid url as the *url* parameter in a JSON body
```
http://localhost:8000/sampleTopic
```
```json
{
   "url":"http://localhost:9000/sample"
}
```
If the subscription is successful, a response is returned with status code `200`
```json
{
  "url": "http://localhost:9000/sample",
  "topic": "sampleTopic"
}
```

###Publishing
Endpoint: **/publish/:topic**, Action: **POST** <br />To publish to a topic's subscribers, pass the *topic* query parameter and a json body containing the message to be published
```
http://localhost:8000/sampleTopic
```
```json
{
  "message": "sample Message",
  "content": "sample message content"
}
```
The message is published with a JSON containing topic and data
```json
{
  "topic": "sampleTopic",
  "data": {
    "message": "sample Message",
    "content": "sample message content"
  }
}
```
If the message is successfully published, status code `200` is returned
```
OK
```

The corresponding `http://localhost:9000/:path` endpoint publishes the request body to console as a JSON string
```
{ topic: 'sampleTopic', data: { message: 'sampleMessage', content: 'sample message content' } }
```

##Additional Notes
- After initiating the app, the default path `/` returns: <br/>Hello subscriber or publisher as the case may be
- An in-memory db was used; given the scale/scope of the app there's no need for cloud persistence

###Built with
- [ExpressJs](https://expressjs.com/) - NodeJs framework
- [NPM](https://www.npmjs.com/) - Package management
- [Loki](https://github.com/techfort/LokiJS) - In-memory data persistence
- [Jest](https://jestjs.io/) - Testing framework
