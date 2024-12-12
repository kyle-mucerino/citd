import { AnimatedTestimonials } from "./AnimatedTestimonials";
import max from "./assets/yourstruly_cidt_max.jpeg";
import josh from "./assets/yourstruly_cidt_josh.jpeg";
import matt from "./assets/yourstruly_cidt_matt.jpeg";
import nye from "./assets/yourstruly_cidt_nye.jpeg";  
import band from "./assets/yourstruly_cidt_band.jpeg";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "When Matt was asked about the inspiration for the name of the band he replied, \"I don't have to answer that, now go get me a juicebox, juicebox boy\"", 
      name: "MEET THE BAND",
      designation: "Crossing i's Dotting t's",
      src: band
    },
    {
      quote:
        "He's heard the joke a thousand times, and yeah he's got that Dick Son",
      name: "Max Dickenson",
      designation: "Bass",
      src: max
    },
    {
      quote:
        "Taking after his favorite tv show character as a kid and his namesake, Josh likes to say things twice for emphasis, EMPHASIS!",
      name: "Josh Valenica",
      designation: "Drums",
      src: josh
    },
    {
      quote:
        "Matthew is the biggest Carlos Lee fan you've ever met...well probably the only Carlos Lee fan you've ever met. Who's Carlos Lee? Exactly.",
      name: "Matthew Mucerino",
      designation: "Lead Singer & Guitar",
      src: matt
    },
    {
      quote:
        "Usually mistaken as being named after Bill Nye the Science Guy, Nye's parents actually just love New Years Eve",
      name: "Nye Fong",
      designation: "Lead Guitar",
      src: nye
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
