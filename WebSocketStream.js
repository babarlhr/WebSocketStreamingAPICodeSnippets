//Its called back pressure in Web socket , it a new web socket api in chrome to handle very fast API response from Server
//Code sniipets from chrome dev channel = > new in chtome 124 (web socket streaming APIs)

// Simple web socket Api request  code
WebSocket.onmessage=async (event) => {
    const data = event.data;
    //await the result of prcoessing step
    await process(data);

};

const process = async (data) => {
    return new Promise((resolve) => {

        //Do something That Take a long time
        console.log('websocket Message Processed.',data);
        return resolve('done');

    });

};



// Web socket streaming APi request code

const was = new WebSocketStream(wss_URL); // Get Websocket conection
const {readable,writeable} = await wss.opened;  //Get readable Stream and Writeable stream
const reader= readable.getReader();  //Get  readble stream defualt reader 
const writer = writeable.getWriter(); //Get  readble stream defualt writer

while (true){
    if(done) {
        break;
    }
    const {value,done} = await process(value);
    await writer.write(result);
}
