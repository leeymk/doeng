package com.ssafy.doeng.data.dto.tale.response;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponsePaymentTaleListDto {
    private List<ResponsePaymentTaleDto> taleList;
}
