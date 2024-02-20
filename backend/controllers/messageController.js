const Conversation = require("../models/conversationModel");

const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const{id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: {$all: [senderId, receiverId]}
            })
        };

        const newMessage = new MessageChannel({
            senderId: sendId
        })

    } catch (error) {
        res.status(500).json({ error: "Internal Server error" })
    }
}

module.exports = sendMessage

