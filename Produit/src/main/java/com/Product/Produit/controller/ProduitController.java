package com.Product.Produit.controller;

import com.Product.Produit.exception.ProduitNotFoundException;
import com.Product.Produit.module.Produit;
import com.Product.Produit.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProduitController {

    @Autowired
    private ProductRepository PR;

    @PostMapping("/produit")
    Produit newProduit(@RequestBody Produit p){



        return PR.save(p);
    }

    @GetMapping("/produits")
    List<Produit> getAllPoduits() {
        return PR.findAll();
    }

    @GetMapping("/produit/{id}")
    Produit getUserById(@PathVariable Long id) {
        return PR.findById(id)
                .orElseThrow(() -> new ProduitNotFoundException(id));
    }

    @PutMapping("/produit/{id}")
    Produit updateUser(@RequestBody Produit newProduit, @PathVariable Long id) {



        return PR.findById(id)
                .map(user -> {
                    user.setNom(newProduit.getNom());
                    user.setQuantite(newProduit.getQuantite());
                    user.setPrixU(newProduit.getPrixU());
                    return PR.save(user);
                }).orElseThrow(() -> new ProduitNotFoundException(id));
    }

    @DeleteMapping("/produit/{id}")
    String deleteUser(@PathVariable Long id){
        if(!PR.existsById(id)){
            throw new ProduitNotFoundException(id);
        }
        PR.deleteById(id);
        return  "Produit id "+id+" est supprimé avec succeés.";
    }
}
