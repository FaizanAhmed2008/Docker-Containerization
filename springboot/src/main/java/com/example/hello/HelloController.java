package com.example.hello;
import org.springframework.web.bind.annotation.*;
import java.net.InetAddress;

@RestController
public class HelloController {
  @GetMapping(value = "/", produces = "text/html")
  public String hello() throws Exception {
    String env = System.getenv().getOrDefault("ENV_VALUE", "No env set");
    String hostname = InetAddress.getLocalHost().getHostName();
    
    return "<html>" +
           "<head><title>Spring Boot App</title>" +
           "<style>body { font-family: sans-serif; text-align: center; margin-top: 50px; } h1 { color: #333; }</style>" +
           "</head>" +
           "<body>" +
           "<h1>Hello from Simple App (Spring Boot)</h1>" +
           "<p><strong>Environment:</strong> " + env + "</p>" +
           "<p><strong>Container:</strong> " + hostname + "</p>" +
           "</body>" +
           "</html>";
  }
}
