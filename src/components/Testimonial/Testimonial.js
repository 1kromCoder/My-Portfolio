import "swiper/css";
import "./Testimonial.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    name: "Waleed Ahmad",
    description:
      "Working with Ahad was seamless — the freelance project was delivered on time, exactly as envisioned.",
    img: t1,
  },
  {
    id: 2,
    name: "Usama Malook",
    description:
      "Ahad provided excellent support throughout the project. He’s fast, responsive, and truly reliable.",
    img: t2,
  },
  {
    id: 3,
    name: "Mohsin",
    description:
      "Super impressed with the Armostore website — clean design, smooth UX, and delivered with professionalism.",
    img: t3,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">Clients Feedback</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonialData.map((testimonial) => {
          const { id, name, description, img } = testimonial;
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={img} alt={`${name} IMG`} className="testimonial__img" />
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
