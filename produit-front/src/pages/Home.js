import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [produits, setProduits] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadProduits();
  }, []);

  const loadProduits = async () => {
    const result = await axios.get("http://localhost:8080/produits");
    setProduits(result.data);
  };

  const deleteProduit = async (id) => {
    await axios.delete(`http://localhost:8080/produit/${id}`);
    loadProduits();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProduits = produits.filter((produit) =>
    produit.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="py-4">
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nom</th>
              <th scope="col">Prix unitaire</th>
              <th scope="col">Quantité</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProduits.map((produit, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{produit.nom}</td>
                <td>{produit.prixU}</td>
                <td>{produit.quantite}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/View/${produit.id}`}
                  >
                    Voir
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/Edit/${produit.id}`}
                  >
                    Modifier
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduit(produit.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
