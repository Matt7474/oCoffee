import { router } from "../router.js";

const loginController = {

    async index(req, res) {
    
        res.render("login")
    },

    async signup(req, res) {
        
        const user = req.body;
        res.locals.user = user;
        req.session.user = user;
        
        res.redirect("/")
    },
};

export { loginController }