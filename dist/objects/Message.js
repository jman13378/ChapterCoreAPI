"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
class Message {
    id; // Unique identifier for the message
    chapterId; // Identifier for the chapter
    user; // User associated with the message
    message; // Content of the message
    /**
     * Constructor to initialize the Message object.
     * @param id - The unique identifier for the message.
     * @param chapterId - The identifier for the chapter.
     * @param user - The user associated with the message.
     * @param message - The content of the message.
     * @param json - The JSON object to initialize the Message object from.
     */
    constructor(id, chapterId, user, message, json) {
        if (json) {
            this.id = json.id;
            this.chapterId = json.chapterId;
            this.user = json.user;
            this.message = json.message;
        }
        else {
            this.id = id;
            this.chapterId = chapterId;
            this.user = user;
            this.message = message;
        }
    }
    static buildMessageFromJson(json) {
        return new Message(json.id, json.chapterId, json.user, json.message);
    }
    static buildMessageListFromJson(json) {
        let messages = [];
        for (let i = 0; i < json.length; i++) {
            messages.push(this.buildMessageFromJson(json[i]));
        }
        return messages;
    }
    /**
     * Get the unique identifier of the message.
     * @returns The message ID.
     */
    getMessageId() {
        return this.id;
    }
    /**
     * Get the identifier of the chapter.
     * @returns The chapter ID.
     */
    getChapterId() {
        return this.chapterId;
    }
    /**
     * Get the user associated with the message.
     * @returns The user object.
     */
    getUser() {
        return this.user;
    }
    /**
     * Get the content of the message.
     * @returns The message content.
     */
    getMessage() {
        return this.message;
    }
}
exports.Message = Message;
