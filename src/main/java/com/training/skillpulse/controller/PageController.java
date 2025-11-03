package com.training.skillpulse.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/")
    public String langingPage() {
        return "langingpage";
    }
    @GetMapping("/index.html")
    public String indexPage()
    {
        return "index";
    }

    @GetMapping("/connect-us.html")
    public String connectUsPage()
    {
        return "connect-us";
    }

    @GetMapping("/gallery.html")
    public String getGalleryPage()
    {
        return "gallery";
    }


    @GetMapping("/services.html")
    public String getServicePage()
    {
        return "services";
    }
}
