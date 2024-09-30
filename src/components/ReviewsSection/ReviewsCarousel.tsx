"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import { Animate } from "../Animate";
import { IAvaliacao } from "@/services/interfaces";
import { useBreakpoints } from "@/hooks/useBreakpoints";

export interface IReviewsCarouselProps {
  reviews: IAvaliacao[];
}

export const ReviewsCarousel = ({ reviews }: IReviewsCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ align: "start", skipSnaps: true });
  const { md } = useBreakpoints();

  return (
    <Box className="embla" ref={emblaRef} sx={{ overflow: "hidden" }}>
      <Box
        className="embla__container"
        sx={{ display: "flex" }}
        gap={{ xs: 0, md: 4 }}
      >
        {reviews.map((review, index) => {
          const isLastSlide = index === reviews.length - 1;
          const delayAnimation = md || index <= 1;

          return (
            <Box
              component={Animate}
              key={review.id}
              initial={{ opacity: 0, y: "30px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: delayAnimation ? (index + 1) * 0.6 : undefined,
              }}
              height="100%"
              sx={{
                flex: {
                  xs: "0 0 16rem",
                  sm: "0 0 20rem",
                  md: "0 0 calc(25% - ((2rem / 4) * 3))",
                },
                pl: {
                  xs: 2,
                  sm: 3,
                  md: 0,
                },
                pr: { xs: isLastSlide ? 2 : 0, md: 0 },
              }}
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
                  value={review.QuantidadeEstrelas}
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
                    {review.Texto}
                  </Typography>

                  <Box
                    component="a"
                    href="https://www.google.com/search?sca_esv=f07f13ca3f96175b&sca_upv=1&sxsrf=ADLYWIJKCD0oy9oYvg7zpwOUsa3OjlGtgQ:1726792766377&q=avalia%C3%A7%C3%B5es+sobre+suits+aluguel+de+trajes+masculinos&uds=ADvngMgv4GhERk0sppt-o9GYOZU4eK0rFzBzeNUo7YEMbyRo4TiGDApnmtiVg_0PIAZtNCjsJDOMWVXamMg5lB4aJBtHJ0ekyxsy74uYFsXxfQBdARPMWBGwgLdUdZcyPCz6EUUVzup4At4rTNHORykPJAYBqCqiDAB-4p5PwM-6crtn_UGsOWfQMYtxh0tg3D3hsjLotsVqjnmJorOmNZs7xDsVflKfHVtQK4NBjXwcgGcaCsk_XqZ0RYRlInsKinHykB-KB1vRCGA1x1lnn4b3xfM4nD_ztsInnM5lMKJWHGVYhdZwAU9sjXFd6BZxz5TwfNaghNIQeL5dDkfGnYzuKFkYzNitwr3aGfz4vklHFgePkxUiajR90ik-vR9l-oo_V7pEMyVhBsqwm9pA5EjFLLyjaTsaE4XZesSXpw-kbhqr9fHd7mfR5PoIfL3MrgCYNiVYqLaQ&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7uN2_qT8BhhUdxXbDnBME3Ur3StDq8kblDTf9z3BzUgJ5bDvz8Wg-_-4ryP7EsMr7wz6pdpJzpIfhO9AFoXVYtc2hY6NyyTIBW_u0QLrr6YeHWh5QKri1YHhtQ1k4OCzrTdJp-I%3D&sa=X&ved=2ahUKEwiT3cKrpNCIAxVcHLkGHQKyM9cQk8gLegQIGBAB&ictx=1&biw=393&bih=665&dpr=3"
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
                    alt={review.Nome}
                    src={review.URLFoto ?? undefined}
                    sx={{ width: "2rem", height: "2rem" }}
                  />

                  <Typography color="white" fontWeight={400}>
                    {review.Nome}
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
