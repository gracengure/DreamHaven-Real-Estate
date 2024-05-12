import React from "react"; // Importing React library
import Testimonials from "./Testimonials"; // Importing Testimonials component
// Function component TestimonialsData
function TestimonialsData() {
  // Array containing testimonial data
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
    {
      id: 3,
      name: "Schrader ",
      text: "I typically do not write a review for anything or anyone, but the outstanding service I received from our Realtor Andrew Cases calls for an exception. Andrew put quality over quantity when it came to helping my family and I secure a home. What I mean by quality is we were not just a “number” to him, he genuinely cared to get to know us and familiarize himself with what we were comfortable with when purchasing a home. An added bonus is that he was prior military, and with us moving overseas from Germany to Texas he was able to relate and make our home purchase that much easier! Andrew was 100% professional at all times, patient with our asks, and knew when to be aggressive in order to get us under contract! He is a valuable asset to your company and we greatly appreciate everything he did for us. Thanks again Andrew!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9kSchuGkfjSh4ENQjx90fd0gl6m253fYBbXgQFiUtQA&s",
    },
    {
      id: 4,
      name: "Pam Barrys",
      text: "I just recently sold my home with Pam & Barry’s Team. The whole process from beginning to end was very easy and painless. Being the first house we’ve ever sold, I can tell you we had a lot of questions. Destiny, Destiny, Destiny!!!! We never could have gone through this without Destiny with P&B! She was absolutely amazing!! She was extremely quick to respond. If she didn’t know the answer, she’d find out and get back to us immediately! Thank you so much Destiny!!",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDRiYWUyOWEtZTU2NS00ZDA1LTljY2EtOWVjNWZiZWFhYjZjXkEyXkFqcGdeQWRpZWdtb25n._V1_.jpg",
    },
    {
      id: 5,
      name: "Yeatmaan ",
      text: "The Yeatman Group was a pleasure to work with! This was our first time building a home and they made the experience fun and as stress free as possible! Even after being in the house already for almost a year, I still see and hear from Kyle and his team, checking in on how we are doing! A great team to work with! – JE",
      image:
        "https://s.yimg.com/ny/api/res/1.2/UMIoMeSwM1DHP28XrGFHgw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzNA--/https://media.zenfs.com/en/tvline.com/02453780281102fac3749b5995efbb31",
    },
    {
      id: 6,
      name: "John Cena",
      text: "We were recommended the Boehmer Team through family friends, & we couldn’t be more grateful that they became our realtors! Both Kelly & Linda were great about guiding us in the right direction for selling our home, & had the personal touch I was wanting when it came to hiring a realtor. They never gave up & were very much in our corner. Kelly was also always responsive whenever we had questions. Five stars!",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/1200px-John_Cena_July_2018.jpg",
    },
  ];

  return (
    <div>
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

export default TestimonialsData; // Exporting the TestimonialsData component
