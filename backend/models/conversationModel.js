const mongoose = require("mongoose");
const conversationSchema = mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default:[]
        }
    ]
}, {timestamps: true});

const conversation = mongoose.model("conversation", conversationSchema);
module.exports = conversation;