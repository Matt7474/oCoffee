import { router } from "../routers/index.js";

const supportController = {

    async index(req, res) {
        
        res.render("support")
    },


    async mentions(req, res) {
        
        res.render("mentions")
    },


    async cgv(req, res) {
        
        res.render("cgv")
    },


    async sitemap(req, res) {
        
        res.render("sitemap")
    },

};

export { supportController }