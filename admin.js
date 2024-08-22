const { kafka } = require("./config")
 
async function init(){
    const admin = kafka.admin();
    
    console.log("Admin connecting...");
    
    admin.connect()

    console.log("Admin connected.");

    console.log("Creating Topic [rider-updates]");

    await admin.createTopics({
        topics: [
            {
                topic: "rider-updates",
                numPartitions: 2
            }
        ]
    });

    console.log("Topic Created Success [rider-updates]");

    console.log("Disconnecting Admin..");
    
    await admin.disconnect();

    console.log("Admin Disconnected.");
}

init();