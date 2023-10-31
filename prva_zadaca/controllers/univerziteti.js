const {add, remove, list} = require("../models/data");

const create = (req, res) =>{
    res.render('univerzitet');
}

const addNew = async (req, res) => {
    let univezitetData = {
        univerzitet: req.body.univezitet,
        adresa: req.body.adresa,
        fakulteti: req.body.fakulteti,
    }
    await add(univezitetData);
    res.redirect('/univerziteti');
};


const remove = async(req, res) => {
    console.log("req query", req.query);
    await remove(req.query.univezitetIndex); //how will we name the var in ejs file
    res.redirect("/univerzitet");

};

const getAll = async (req, res) => {
    let data = await list();
    res.render("univerzitet", {data})
}

module.exports = {
    create,
    addNew,
    remove,
    getAll
};