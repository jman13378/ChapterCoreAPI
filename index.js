const request = require("request");

const baseURL = "https://dashboard.sokobot.info/";
const APIPath = "api/";

class Sokobot {
  #token;

  /**
   * Creates an API instance
   *
   * @param {String} token The api token gotten from https://dashboard.sokobot.info/settings/developers/api
   */
  constructor(token = "none") {
    if (!token) {
      console.log("No Token Provided");
      return null;
    }
    this.#token = token;
  }

  /**
   * Gets a user's info like their level, balance, etc.
   *
   * @param {String} userId
   * @returns {Promise<Sokobot.User>}
   * @public
   */
  async getUser(userId) {
    return new Promise((resolve, reject) => {
      request.get(
        baseURL + APIPath + "users/" + userId,
        { headers: { Authorization: this.#token }, rejectUnauthorized: false },
        async function (error, response, body) {
          if (error) {
            reject(error);
          } else {
            let user = await Sokobot.handleCode(response, body, (r, b) => {
              return new Sokobot.User(b);
            });
            resolve(user);
          }
        }
      );
    });
  }
  /**
   *
   *
   * @param {request.Response} response
   * @param {*} body
   * @param {function} callback
   * @private
   */
  static async handleCode(response, body, callback) {
    await Sokobot.handleCodes(response.statusCode);

    return callback(response, body);
  }
  /**
   * @private
   */
  static async handleCodes(code) {
    // success codes
    if (code === 200) return;
    if (code === 201) return;
    // error codes
    if (code === 401)
      console.error(
        'Token Provided was invalid {code: 401, message: "The token provided is invalid"}'
      );
    if (code === 429)
      console.error(
        'Rate Limited please wait {code: 429, message: "Normally returned from cloudflare (requests/time) 25/10s"}'
      );
    if (code === 404) console.error("Content doesn't exist");
    // server errors
    if (code === 500) console.error("Host Down");
    if (code === 501) console.error("Not Implemented");
    process.exit();
  }
}
/**
 *
 * @private
 */
Sokobot.User = class {
  #raw;
  #level;
  #inventory;
  #balance;
  #language;

  /**
   *
   * @param {String} userJSON the users json sent by the api
   */
  constructor(userJSON) {
    this.#raw = userJSON;
    let json = JSON.parse(userJSON);
    this.#level = json.level;
    this.#inventory = json.inventory;
    this.#balance = json.balance;
    this.#language = "NOT IMPLEMENTED";
  }
  /**
   * Gets the users level
   *
   * @returns {int}
   */
  getLevel() {
    return this.#level;
  }
  /**
   * Gets the users Balance
   *
   * @returns {int}
   */
  getBalance() {
    return this.#balance;
  }
  /**
   * Gets the users level
   *
   * @returns {JSON}
   */
  getInventory() {
    return JSON.parse(this.#inventory);
  }
  /**
   * Gets the users info how it was received
   *
   * Can be used for your own parsing
   *
   * @returns {int}
   */
  getRaw() {
    return this.#raw;
  }
  /**
   * Gets the users Language preference
   *
   * @returns {String}
   */
  getLanguage() {
    return this.#language;
  }
};
module.exports = Sokobot;
