package com.example.samplejavaapi;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class GenericController {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public String ExampleGetRequest()
    {
        System.out.println("GET REQUEST RECIEVED");
        return "GET Request Successful...";
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public ResponseEntity<Object> ExamplePostRequest() {
        System.out.println("POST REQUEST RECIEVED");
        return new ResponseEntity<>("POST Request Successful...", HttpStatus.OK);
    }
}
