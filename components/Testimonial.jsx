import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
const testimonials = [
  {
    name: "Nikola",
    position: "Studentka",
    quote:
      "Nejvíc na sobě vnímám změnu co se myšlení týče. Už se necítím špatně, když si dám něco ne zrovna výživově vyváženého. Moc se mi líbil úvodní e-mail, ve kterém stálo “nejsem od toho, abych tě soudila”, protože vždy, když mám někde uvést váhu, tak se stydím.. tohle mi od studu velice pomohlo.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Nikola",
    position: "Studentka",
    quote:
      "Nejvíc na sobě vnímám změnu co se myšlení týče. Už se necítím špatně, když si dám něco ne zrovna výživově vyváženého. Moc se mi líbil úvodní e-mail, ve kterém stálo “nejsem od toho, abych tě soudila”, protože vždy, když mám někde uvést váhu, tak se stydím.. tohle mi od studu velice pomohlo.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="testimonial"
      className="my-20 flex flex-col items-center justify-center md:my-32"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-center  text-2xl font-semibold md:text-5xl">
          Reference
        </h1>
        <span className="text-md mt-2 px-2  md:mt-4 md:px-5 md:text-xl">
          Co o mně říkají klienti
        </span>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="py-10">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="container mx-4 h-96 rounded-xl max-sm:max-w-sm"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="h-full bg-base-100" key={index}>
              <div className="flex h-full items-center justify-center">
                <figure className="mx-10 mt-10">
                  <blockquote className="text-center  font-semibold leading-8 text-base-content lg:text-2xl">
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <div className="mt-10 flex flex-col items-center">
                    <img
                      className="mx-auto h-14 w-14 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="mt-4 flex justify-center gap-2 lg:tracking-widest">
                      <div>{item.name}</div>
                      <div className="text-base-content/50">
                        {item.position}
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
