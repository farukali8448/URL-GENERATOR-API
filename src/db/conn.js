const {connect} = require("mongoose");


(async()=>{
    try {
        const data = await connect(process.env.MONGOURI);
        console.log(`Connection Successful!!`);
    } catch (err) {
        console.log(err);
    }
})();