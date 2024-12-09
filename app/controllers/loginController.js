import { router } from "../router.js";

const loginController = {
    async index(req, res) {

    
        res.render("login")
    },

    async signup(req, res) {
        
        
        console.log("je suis la !");
        
    
        res.redirect("compte")
    },
};

export { loginController }