const Sokobot = require("./index.js")
const sokobot =  new Sokobot("gUJm%jAj-gTalR-JSAYj-@vUaG9-q$CgsSj9-DiEUK%ROhc7-C586%d9-H@6@l6-YslVNl-8trQJJMpPey@tHq@9-D@*6ZNJIb5")

async function getLevel() {

let user = await sokobot.getUser("766104191403163708")

console.log(user.getLevel())

}
getLevel()