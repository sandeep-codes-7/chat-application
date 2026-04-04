package com.privechat.chat_app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/chat")
public class SampleController {

    @GetMapping("/sample")
    public String greet(){
        return "hey world";
    }
    @GetMapping("/sample2")
    public String message(){
        return "hey Sandeep";
    }
}
