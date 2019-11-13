package com.example.momtodoapi.helloWorld;


import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {


    @GetMapping(path = "/hello-mom")
    public String helloWorld() {
        return "You are Beautiful! You will have a wonderful day!";
    }

    @GetMapping(path = "/hello-mom-bean")
    public HelloWorldBean helloWorldBean() {

        return new HelloWorldBean("Hello Mom");
    }

    ///hello-world/path-variable/in28minutes
    @GetMapping(path = "/hello-mom/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        //throw new RuntimeException("Something went wrong");
        return new HelloWorldBean(String.format("Hello Mom, %s", name));
    }
}
