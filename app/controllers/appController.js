import { router } from "../router.js";


const appController = {
    async homepage(req, res) {
        res.render("homepage")
    },

    async catalog(req, res) {
        res.render("catalog")
    },

    async product(req, res) {
        res.render("product")
    },
};


export { appController }