const url = "http://localhost:5000/api/";

function crearUsuario(nuevoUsuario){
  return new Promise((resolve,reject)=>{ 
    fetch(url + "user", {
      method: 'POST',
      body: JSON.stringify({nuevoUsuario}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((json) => resolve(json));
});

}


function verificarUsuario(usuario){
  return new Promise((resolve,reject) => {
    fetch(url + "user/" + usuario.cuil, {
      method: 'POST',
      body: JSON.stringify({usuario}),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
},
}).then((response) => response.json()).then((json) => resolve(json));
  });
}

function getIncidentes(){
  return new Promise((resolve,reject) => {
    fetch(url + "/incidentes").then((response) => response.json()).then((json) => resolve(json));
  });
}

function getCategorias(){
  return new Promise((resolve,reject) => {
    fetch(url + "/categorias").then((response) => response.json()).then((json)=> resolve(json));
  });
}

function getCalles(){
  return new Promise((resolve,reject) =>{
    fetch(url + "/calles").then((response) => response.json()).then((json) => resolve(json));
  });
}

function reclamoPost(reclamo,cuil){
  
  return new Promise((resolve,reject)=>{ 
    fetch(url + "nuevoreclamo", {
      method: 'POST',
      body: reclamo,
})
.then((response) => response.json())
.then((json) => resolve(json));
});
}


export {crearUsuario, verificarUsuario, getIncidentes, getCategorias, getCalles, reclamoPost};