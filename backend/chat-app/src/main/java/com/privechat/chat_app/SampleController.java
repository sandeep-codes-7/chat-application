package com.privechat.chat_app;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    @RequestMapping("/samplef")
    public String greet(){
//        System.out.println("hey world");
        return "hey world";
    }
}
