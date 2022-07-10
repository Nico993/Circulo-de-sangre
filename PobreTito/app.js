const express = require("express");
const bodyParser = require("body-parser");
const sessions = require('express-session');
const upload = require("express-fileupload");

const usuario = require(__dirname + "/usuario.js");
const vl = require(__dirname + "/validator.js");
const incidentes = require(__dirname + "/incidente.js");
const categorias = require(__dirname + "/categoria.js");
const calles = require(__dirname + "/calle.js");
const reclamo = require(__dirname + "/reclamo.js");



const app = express();

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// a variable to save a session
var session;


app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(upload());


app.get("/",function(req,res){
    res.render("index",{
        band:false
    });
});

app.get("/registro",function(req,res){
    res.render("registro",{
        band: false
    });
});

app.get("/menu",function(req,res){
    session = req.session;
    if(session.userid){
        res.render("menu",{
            menuActive: "active",
            nuevoReclamoActive: "",
            band: false
        });
    }
    else{
        res.redirect("/");
    }
})

app.get("/nuevoReclamo",function(req,res){
    session = req.session
    if(session.userid){
        res.render("nuevoReclamo",{
            menuActive: "",
            nuevoReclamoActive: "active",
            listaIncidentes: incidentes,
            listaCategorias: categorias,
            listaCalles: calles
        });
    }
    else{
        res.redirect("/");
    }
});

app.get("/logout",(req,res) => {
    req.session.destroy();
    res.redirect('/');
});



app.post("/",function(req,res){
    if(vl.validarUsuario(req.body.cuil,req.body.contrasena)){
        session = req.session;
        session.userid = req.body.cuil;
        res.redirect("/menu");
    }
    else{
        res.render("index",{
            band:true
        });
    }
});

app.post("/registro",function(req,res){
    if(vl.validarNuevoUsuario(req.body.cuil,req.body.contrasena,req.body.rContrasena)){
        nuevoUsuario = new usuario.user(req.body.cuil,req.body.nombre,req.body.apellido,req.body.contrasena,req.body.domicilio,req.body.telefono);
        usuario.usuarios.push(nuevoUsuario);
        res.redirect("/");
    }
    else{
        res.render("registro",{
            band: true
        });
    }
});


app.post("/nuevoReclamo",function(req,res){
    //subir foto;
    let file = req.files.foto;
    let filename = file.name;
    file.mv('./uploads/' + filename,function(err){
        if(err){
            res.send(err);
        }
    });

    let categoria = categorias[req.body.categoria];
    let calle = calles.find(x=> x.codigo == req.body.calle);
    let numeroCalle = req.body.numeroCalle;
    let comentario = req.body.comentario;
    let fechaYHora = new Date();
    let foto = (__dirname + "/uploads/" + filename);

    let recla = new reclamo.nuevoReclamo(reclamo.reclamos.length,"En proceso",comentario,foto,fechaYHora,calle,numeroCalle,categoria);
    reclamo.reclamos.push(recla);

    res.render("menu",{
        menuActive: "active",
            nuevoReclamoActive: "",
            band: true
    })


});

app.listen(3000,function(){
    console.log("Server runnig on port 3000");
});