package com.example.doenggameflux.component;

import java.util.HashMap;
import java.util.Map;

import com.example.doenggameflux.dto.response.TokenResponseDto;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;


@Component
public class TokenComponent {
    static private final String BASIC_URL = "http://localhost:8200/api/member/ai";
    public static Mono<Long> jwtConfirm(String auth) {
        Mono<String> token = Mono.just(auth);
        return token.map(s -> {
                    Map<String, String> map = new HashMap<>();
                    map.put("accesstoken", s);
                    return map;
                })
                .flatMap(map -> makeWebClient(map))
                .flatMap(message -> {
                    return Mono.just(message.getId());
                }).log();
    }

    private static Mono<TokenResponseDto> makeWebClient(Map<String, String> map)  {
        return WebClient.builder()
                .baseUrl(BASIC_URL)
                .defaultHeader(HttpHeaders.AUTHORIZATION, map.get("accesstoken"))
                .build()
                .get()
                .retrieve()
                .bodyToMono(TokenResponseDto.class)
                .onErrorResume(e -> {
                    String errorMessage = "Error: " + e.getMessage();
                    return Mono.error(new Exception(errorMessage)); // Exception을 던지는 Mono 반환
                    // 에러 처리 추가
                });
    }
}