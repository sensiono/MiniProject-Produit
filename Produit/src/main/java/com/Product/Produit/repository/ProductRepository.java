package com.Product.Produit.repository;

import com.Product.Produit.module.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Produit,Long> {
}
