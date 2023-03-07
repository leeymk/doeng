package com.ssafy.doeng.data.dto.tale.response;

import com.ssafy.doeng.data.dto.review.response.ResponseReviewDto;
import com.ssafy.doeng.data.dto.review.response.ResponseReviewListDto;
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
public class ResponsePaymentTaleDetailDto {
    private long id;
    private String title;
    private String backgroundImage;
    private double score;
    private boolean purchased;
    private ResponseReviewDto myReview;
    private ResponseReviewListDto reviewList;
}
