/**
 * Enum representing various user flags.
 * These flags are used to indicate different states and roles of a user within the system.
 */
export enum Flags {
    /**
     * User's account is banned.
     */
    ACCOUNT_BANNED = 1,

    /**
     * User's account is suspended.
     */
    ACCOUNT_SUSPENDED = 2,

    /**
     * User's account is deactivated.
     */
    ACCOUNT_DEACTIVATED = 4,

    /**
     * User's email is not verified.
     */
    EMAIL_NOT_VERIFIED = 8,

    /**
     * User's phone number is not verified.
     */
    PHONE_NOT_VERIFIED = 16,

    /**
     * User is a developer
     */
    DEVELOPER = 32,

    /**
     * User has system admin privileges.
     */
    SYSTEM_ADMIN = 64,

    /**
     * User has chapter admin privileges.
     */
    CHAPTER_ADMIN = 128,

    /**
     * User has chapter moderator privileges.
     */
    CHAPTER_MODERATOR = 256,

    /**
     * User is a member of the chapter.
     */
    CHAPTER_MEMBER = 512,

    /**
     * User is a guest of the chapter.
     */
    CHAPTER_PARENT = 1024,

    /**
     * User's chapter membership is pending.
     */
    CHAPTER_PENDING = 2048,

    /**
     * User is invited to the chapter.
     */
    CHAPTER_INVITED = 4096,

    /**
     * User is banned from the chapter.
     */
    CHAPTER_BANNED = 8192,

    /**
     * User is suspended from the chapter.
     */
    CHAPTER_SUSPENDED = 16384,

    /**
     * User's chapter membership is deactivated.
     */
    CHAPTER_DEACTIVATED = 32768,

    /**
     * User is a chapter advisor
     */
    CHAPTER_ADVISOR = 65536,
}
