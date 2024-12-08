import { router } from "../router.js";

const loginController = {
    async index(req, res) {

    
        res.render("login")
    },
};

export { loginController }