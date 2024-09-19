"use client";

import useEmblaCarousel from "embla-carousel-react";
import { IReview } from "./ReviewsSection";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";

export interface IReviewsCarouselProps {
  reviews: IReview[];
}

export const ReviewsCarousel = ({ reviews }: IReviewsCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ align: "start", skipSnaps: true });

  return (
    <Box className="embla" ref={emblaRef} sx={{ overflow: "hidden" }}>
      <Box className="embla__container" sx={{ display: "flex" }}>
        {reviews.map((review, index) => {
          const isLastSlide = index === reviews.length - 1;

          return (
            <Box
              sx={{
                flex: "0 0 16rem",
                pl: 2,
                pr: isLastSlide ? 2 : 0,
              }}
              key={review.name}
            >
              <Stack
                gap={2}
                sx={{
                  px: 3,
                  py: 2,
                  backgroundColor: "rgba(255,255,255,.2)",
                }}
                alignItems="flex-start"
              >
                <Rating
                  value={review.rating}
                  readOnly
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: "primary.main",
                    },
                  }}
                />

                <Stack alignItems="flex-start">
                  <Typography
                    color="white"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: "5",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {review.text}
                  </Typography>

                  <Box
                    component="a"
                    href="https://www.google.com/search?q=suits+trajes&oq=suits+trajes&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMg0IAhAAGIMBGLEDGIAEMg0IAxAuGK8BGMcBGIAEMggIBBAAGBYYHjIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPNIBCDM3NDlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x94deb02a4712dbb5:0x29ee4abc4d4a4bed,1,,,, "
                    target="_blank"
                    sx={{
                      "&:hover": {
                        "& > p": {
                          textDecoration: "underline",
                        },
                      },
                    }}
                  >
                    <Typography color="white" sx={{ opacity: 0.4 }}>
                      Ver mais
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" alignItems="center" gap={1}>
                  <Avatar
                    alt={review.name}
                    src={review.photoUrl}
                    sx={{ width: "2rem", height: "2rem" }}
                  />

                  <Typography color="white" fontWeight={400}>
                    {review.name}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
