// Full-Stack апликација:
// ●	CRUD систем за универзитети и факултети
// ●	да не се имплементира автентикација на корисник
// ●	универзитетите може да имаат повеќе факултети, еден факултет може да биде дел само од еден универзитет
// ●	за секој универзитет се чуваат неговото име, адреса и кои факултети се во него
// ●	за секој факултет се чуваат неговото име, адреса и под кој универзитет спаѓа
// ●	да се направи кориснички интерфејс (со ejs) кој ќе нуди форми за креирање, промена, бришење и листање на факултет
// ●	во формите за креирање и промена на факултет да се додаде select елемент преку кој ќе може да се селектира универзитетот
// ●	не треба да се прават страници за универзитети, податоците за универзитети можете да ги внесете директно во база (бонус: употреба на faker)
// ●	кодот треба да биде поставен на Github репо во folder именуван task-1


const express = require ("express");

const {
    create,
    remove,
    addNew,
    list,
  } = require("./controllers/univerziteti");

const app = express();

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     let data = {
//         univerziteti: [
//             {ime:"UKIM", adresa: "Skopje", fakulteti: "Filozofski Fakultet, Praven Fakultet, Gradezen Fakultet"},
//             {ime:"Univezitet Goce Delcev", adresa: "Stip", fakulteti: "Masinski Fakultet, Fakultet za informatika"},
//             {ime:"SEEU", adresa: "Tetovo", fakulteti: "Biznis i ekonomija, Computer Science "},
//         ],
//     };
//     res.render("index", data)

// });

app.post("/create", create);
app.post("/create", create);
app.get("/delete", remove);
app.get("/list", list)

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log("Server started");
  });