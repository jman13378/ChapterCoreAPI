import { User } from "./User";

export class Message {
    id: Number;
    chapterId: Number;
    user: User;
    message: string;

    /**
     * Constructor to initialize the Message object.
     * @param id - The unique identifier for the message.
     * @param chapterId - The identifier for the chapter.
     * @param userId - The identifier for the user.
     * @param message - The content of the message.
     */
    constructor(id: Number, chapterId: Number, user: User, message: string) {
        this.id = id;
        this.chapterId = chapterId;
        this.user = user;
        this.message = message;
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
     * Get the identifier of the user.
     * @returns The user ID.
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