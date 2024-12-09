import { User } from "./User";
export declare class Message {
    id: Number;
    chapterId: Number;
    user: User;
    message: string;
    /**
     * Constructor to initialize the Message object.
     * @param id - The unique identifier for the message.
     * @param chapterId - The identifier for the chapter.
     * @param user - The user associated with the message.
     * @param message - The content of the message.
     * @param json - The JSON object to initialize the Message object from.
     */
    constructor(id?: Number, chapterId?: Number, user?: User, message?: string, json?: {
        id: Number;
        chapterId: Number;
        user: User;
        message: string;
    });
    static buildMessageFromJson(json: any): Message;
    static buildMessageListFromJson(json: any): Message[];
    /**
     * Get the unique identifier of the message.
     * @returns The message ID.
     */
    getMessageId(): Number;
    /**
     * Get the identifier of the chapter.
     * @returns The chapter ID.
     */
    getChapterId(): Number;
    /**
     * Get the user associated with the message.
     * @returns The user object.
     */
    getUser(): User;
    /**
     * Get the content of the message.
     * @returns The message content.
     */
    getMessage(): string;
}
