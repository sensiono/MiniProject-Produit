import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Add() {
  let navigate = useNavigate();

  const [produit, setProduit] = useState({
    nom: "",
    prixU: "",
    quantite: "",
  });

  const { nom, prixU, quantite } = produit;

  const onInputChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (parseFloat(prixU) <= 0) {
        alert("Product price should be greater than 0.");
        return;
      }
  
      if (nom.trim() === "") {
        alert("Product name cannot be empty.");
        return;
      }
  
      if (parseInt(quantite) <= 0) {
        alert("Product quantity should be greater than 0.");
        return;
      }
  
      
    await axios.post("http://localhost:8080/produit", produit);
    navigate("/");
  };

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Ajouter un produit</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer le nom"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prixU" className="form-label">
                Prix unitaire
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer le prix unitaire"
                name="prixU"
                value={prixU}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantite" className="form-label">
                Quantité
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Entrer la quantité"
                name="quantite"
                value={quantite}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Enregistrer
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}