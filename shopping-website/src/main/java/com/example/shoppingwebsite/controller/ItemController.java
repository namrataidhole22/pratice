package com.example.shoppingwebsite.controller;

import com.example.shoppingwebsite.model.Item;
import com.example.shoppingwebsite.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }
    @GetMapping("/{id}")
    public String getItemById(@PathVariable Long id, Model model) {
        Optional<Item> itemOpt = itemService.findById(id);
        if (itemOpt.isPresent()) {
            model.addAttribute("item", itemOpt.get());
            return "item-details";
        } else {
            return "item-not-found";
        }
    }
}