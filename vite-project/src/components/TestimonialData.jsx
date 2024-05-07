import React from "react";
import Testimonials from "./Testimonials";

function TestimonialsData() {
  const testimonials = [
    {
      id: 1,
      name: "Patrick Wamwea",
      text: "Our agent was Will, he was very knowledgeable of the current market trends. He was very helpful and straight forward with us on the sale of our home. He even went as far as helping us find a short term rental in the area after we sold our home. He is a professional in every aspect of the real estate business. He would respond quickly if we sent him a text message or called him. Top notch customer service! Would definitely use the Lee Ann Wilkinson Group in the future and have Will as our agent.",
      image:
        "https://pix11.com/wp-content/uploads/sites/25/2022/03/AP22054729638125-1.jpg?strip=1",
    },
    {
      id: 2,
      name: " Sarah Leonard",
      text: "The entire Sarah Leonard team made selling our house a smooth and pleasant experience. They knew exactly what to do at every step of the process and gave us excellent guidance along the way. Specifically our realtor Sharon Bell was extremely helpful and responsive. We could not have been happier working with her! She remained confident when we encountered challenges and always kept us on target. I would highly recommend Sarah Leonard’s group to anyone selling or buying a house. They are the ultimate professionals!",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/68/32/68/1000_F_368326871_Ca3Lj0cKayEppeniuxw8YkOzfxBEWYXZ.jpg",
    },
   
  ];

  return (
    <div>
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export default TestimonialsData;

