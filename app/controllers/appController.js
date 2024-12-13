import { router } from "../router.js";
import { Coffee } from '../models/index.js';
import { Op } from "sequelize";
import fetch from 'node-fetch'


const appController = {
    async homepage(req, res) {

        //! Test de connexion avec une API d'images de café (fonctionnel) 
        // const response = await fetch('https://coffee.alexflipnote.dev/random.json');
        // const data = await response.json();
        // const imageUrl = data.file;

        const coffees = await Coffee.findAll({
            limit: 3,
            order: [['id', 'DESC']],
            include: ['origin', 'caracteristic']
        })
        console.log(coffees);
        
        res.render("homepage", { coffees })
    },

    async catalog(req, res) {

        const coffees = await Coffee.findAll({
            order: [['id', 'ASC']],
            include: ['origin', 'caracteristic', 'disponibility']
        })

        const allCaracteristics = coffees.map(coffee => coffee.caracteristic.carac);
        const uniqueCarac = [...new Set(allCaracteristics)];

        const allDisponibilities = coffees.map(coffee => coffee.disponibility.dispo);
        const uniqueDispo = [...new Set(allDisponibilities)];

        // console.log(uniqueDispo);

        res.render("catalog", { coffees, uniqueCarac, uniqueDispo })
    },

    async product(req, res) {
        // console.log(req.params);
        const { name } = req.params;

        const coffee = await Coffee.findOne({
            where: { name },
            include: ['origin', 'caracteristic', 'disponibility']
        });     
        
        res.render("product", { coffee })
    },

    async search(req, res) {
        const searchQuery = req.query['header-searchbar'];
        // console.log('La recherche est:', searchQuery);
    
        try {
    
            const coffees = await Coffee.findOne({
                where: {
                    name: {
                        [Op.iLike]: `%${searchQuery}%`
                    }
                },
                include: ['origin', 'caracteristic', 'disponibility']
            });
            // console.log(coffees);
            const coffeeName = coffees.dataValues.name
            // console.log(coffeeName);
            if (!coffees) {
                return res.status(404).render("404");
            }

            res.redirect(`/produit/${coffeeName}`);
    
        } catch (error) {
            console.error('Erreur de recherche :', error);
            res.status(500).render('500');
        }
    },

    async cart(req, res) {

        res.render("cart")
    },

    async enptyTheCart(req, res) {

        req.session.cartQuantity = 0;
        res.redirect("catalogue")
    }

};


export { appController }