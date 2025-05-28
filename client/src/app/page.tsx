"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ aceternity/cover";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";
const MainPage = () => {
  return (
    <div>
      <Button variant="ghost">Button</Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Build amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide className="text-8xl bg-amber-800">Slide 1</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 2</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 3</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 4</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 5</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 6</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 7</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 8</SwiperSlide>
          <SwiperSlide className="text-8xl bg-amber-800">Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainPage;
