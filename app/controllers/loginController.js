import { router } from "../routers/index.js";

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

    
    async delete(req, res) {
       
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Erreur lors de la suppression de la session');
            }
    
            res.redirect('/');
        });
    }
};

export { loginController }