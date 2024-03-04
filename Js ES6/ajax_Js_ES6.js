//Fonction utiles

function get(urlA, fonctSucess, fonctError) {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(urlA, requestOptions)
    .then((response) => response.json())
    .then(function (data) {
      fonctSucess(JSON.stringify(data));
    })
    .catch(function (error) {
      console.log("La requete GET a échoué : ", error);
      fonctError(error);
    });
}

function post(urlA, donnees, fonctSucess, fonctError) {
  var requestOptions = {
    method: "POST",
    body: donnees,
    redirect: "follow",
  };
  fetch(urlA, requestOptions)
    .then((response) => response.text())
    .then(function (data) {
      console.log("Requete POST a abouti avec la réponse JSON : ", data);
      fonctSucess(data);
    })
    .catch(function (error) {
      console.log("La requete POST a échoué : ", error);
      fonctError(error);
    });
}

function put(urlA, donnees, fonctSucess, fonctError) {
  var requestOptions = {
    method: "PUT",
    body: donnees,
    redirect: "follow",
  };

  fetch(urlA, requestOptions)
    .then((response) => response.text())
    .then(function (data) {
      console.log("Requete PUT a abouti avec la réponse JSON : ", data);
      fonctSucess(data);
    })
    .catch(function (error) {
      console.log("La requete PUT a échoué : ", error);
      fonctError(error);
    });
}

function del(urlA, fonctSucess, fonctError) {
  var urlencoded = new URLSearchParams();

  var requestOptions = {
    method: "DELETE",
    body: urlencoded,
    redirect: "follow",
  };

  fetch(urlA, requestOptions)
    .then((response) => response.text())
    .then(function (data) {
      console.log("Requete DELETE a abouti avec la réponse JSON : ", data);
      fonctSucess(data);
    })
    .catch(function (error) {
      console.log("La requete DELETE a échoué : ", error);
      fonctError(error);
    });
}
