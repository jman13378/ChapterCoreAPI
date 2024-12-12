import { User } from "./User.js";

export class Message {
    #id: Number; // Unique identifier for the message
    #chapterId: Number; // Identifier for the chapter
    #user: User; // User associated with the message
    #message: string; // Content of the message

    /**
     * Constructor to initialize the Message object.
     * @param id - The unique identifier for the message.
     * @param chapterId - The identifier for the chapter.
     * @param user - The user associated with the message.
     * @param message - The content of the message.
     * @param json - The JSON object to initialize the Message object from.
     */
    constructor(id: Number, chapterId: Number, user: User, message: string) {

        this.#id = id;
        this.#chapterId = chapterId;
        this.#user = user;
        this.#message = message;

    }
    static buildMessageFromJson(json: any): Message {
        return new Message(json.id, json.chapterId, json.user, json.message);
    }
    static buildMessageListFromJson(json: any): Message[] {
        let messages: Message[] = [];
        for (let i = 0; i < json.length; i++) {
            messages.push(this.buildMessageFromJson(json[i]));
        }
        return messages;
    }

    /**
     * Get the unique identifier of the message.
     * @returns The message ID.
     */
    getMessageId(): Number {
        return this.#id;
    }

    /**
     * Get the identifier of the chapter.
     * @returns The chapter ID.
     */
    getChapterId(): Number {
        return this.#chapterId;
    }

    /**
     * Get the user associated with the message.
     * @returns The user object.
     */
    getUser(): User {
        return this.#user;
    }

    /**
     * Get the content of the message.
     * @returns The message content.
     */
    getMessage(): string {
        return this.#message;
    }
}