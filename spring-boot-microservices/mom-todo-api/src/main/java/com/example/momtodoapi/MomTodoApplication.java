package com.example.momtodoapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController


public class MomTodoApplication {

	@RequestMapping("/")
	public String home() {
		return "MOM API page";
	}

	public static void main(String[] args) {
		SpringApplication.run(MomTodoApplication.class, args);
	}

}
