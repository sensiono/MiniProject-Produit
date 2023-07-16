import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
    const [produit, setProduit] = useState({
        nom: "",
        prixU: "",
        quantite: "",
      });
    

  const { id } = useParams();

  useEffect(() => {
    loadProduit();
  }, []);

  const loadProduit = async () => {
    const result = await axios.get(`http://localhost:8080/produit/${id}`);
    setProduit(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Details de produit</h2>

          <div className="card">
            <div className="card-header">
              Details de produit id : {produit.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nom:</b>
                  {produit.nom}
                </li>
                <li className="list-group-item">
                  <b>Prix unitaire:</b>
                  {produit.prixU}
                </li>
                <li className="list-group-item">
                  <b>Quantité:</b>
                  {produit.quantite}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Retourner 
          </Link>
        </div>
      </div>
    </div>
  );
}