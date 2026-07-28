"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout";


import TestimonialCard from "./TestimonialCard";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useHomepageReviews } from "@/hooks/useReview";

export default function Testimonials() {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useHomepageReviews();

  return (
    <section className="py-24">
      <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by outdoor enthusiasts across Bangladesh.
          </p>

        </motion.div>


        {/* Loading */}

        {isLoading && (
          <div className="grid gap-8 lg:grid-cols-3">

            {Array.from({
              length: 3,
            }).map((_, index) => (
              <div
                key={index}
                className="h-72 animate-pulse rounded-3xl bg-muted"
              />
            ))}

          </div>
        )}



        {/* Error */}

        {isError && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-8 text-center">

            <h3 className="font-semibold text-destructive">
              Failed to load testimonials
            </h3>

            <p className="mt-2 text-muted-foreground">
              Please refresh and try again.
            </p>

          </div>
        )}



        {/* Empty */}

        {!isLoading &&
          !isError &&
          (!reviews || reviews.length === 0) && (

            <div className="rounded-2xl border bg-card p-10 text-center">

              <h3 className="text-xl font-semibold">
                No reviews available
              </h3>

              <p className="mt-2 text-muted-foreground">
                Customer reviews will appear here.
              </p>

            </div>

          )}



        {/* Reviews Carousel */}

        {!isLoading &&
          !isError &&
          reviews &&
          reviews.length > 0 && (

          <Swiper

            modules={[
              Navigation,
              Pagination,
              Autoplay,
            ]}

            spaceBetween={30}

            slidesPerView={1}

            loop={true}

            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}

            navigation

            pagination={{
              clickable: true,
            }}

            breakpoints={{

              640:{
                slidesPerView:1,
              },

              768:{
                slidesPerView:2,
              },

              1280:{
                slidesPerView:3,
              },

            }}

            className="pb-14"

          >

            {reviews.map((review)=>(
              
              <SwiperSlide key={review.id}>

                <TestimonialCard
                  review={review}
                />

              </SwiperSlide>

            ))}


          </Swiper>

        )}


      </Container>
    </section>
  );
}