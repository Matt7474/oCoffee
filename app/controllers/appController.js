import { router } from "../router.js";


const appController = {
    async homepage(req, res) {
        res.render("homepage")
    }
}


export { appController }