const request = require('request');

const baseURL = "https://dashboard.sokobot.info/"
const APIPath = "api/"


class Sokobot {

    #token;

    /**
     * Creates an API instance
     * 
     * @param {String} token The api token gotten from https://dashboard.sokobot.info/settings/developers/api
     */
    constructor(token="none") {
        
        this.#token = token; 
        
    }

    /**
     * Gets a users info like their level, balance, etc.
     * 
     * @param {String} userId 
     * @returns {User}
     * @public
     */
    getUser(userId) {
        request.get(baseURL + APIPath + "users/"+userId,null,function (error, response, body) {

            console.log(body)

            Sokobot.handleCode(response,body, (r,b) => {
                console.log(r)
                return new User(JSON.parse(b))
            })
            
        }).auth(null,null,true,this.#token)
    }
    /**
     * 
     * 
     * @param {request.Response} response
     * @param {*} body
     * @param {function} callback
     * @private
     */
    static handleCode(response,body, callback) {
        let status = Sokobot.handleCodes(response.statusCode)
        if (status!=undefined) {console.log(response); return;}
        return callback(response,body)
    }
    /**
     * @private
     */
    static handleCodes(code) {
        console.log(code)
        if (code===200)return undefined
        if (code===201) return undefined
        if (code===401) return "Token Provided was invalid"
        if (code===500) return "Host Down"
        if (code===429) return "Rate Limited please wait"
        if (code===404) return "Content doesn't exist"
    }
}
class User {
    /**
     * 
     * @param {JSON | String} userJSON the users json sent by the api 
     */
    constructor(userJSON) {
        this.raw = userJSON
        let json = JSON.parse(userJSON)
        this.level=json.level
        this.inventory=json.inventory
        this.balance=json.balance
        this.language="NOT IMPLEMENTED"
    }
    
}
module.exports = Sokobot;
