package com.nimsoc.items.items.repository;


import com.nimsoc.items.items.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
