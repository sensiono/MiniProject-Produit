package com.Product.Produit.exception;



    public class ProduitNotFoundException extends RuntimeException{
        public ProduitNotFoundException(Long id){
            super("Pas de produit avec id: "+ id);
        }
    }

