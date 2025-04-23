import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-box">
        <h2 className="heading">Testimonials</h2>
        <div className="wrapper">
          <div className="testimonials-item">
            <img src="/images/basil-removebg-preview.png" alt="Basil" />
            <h3>Basil Daboor</h3>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>Working with Mootaz was a great experience. His dedication to delivering high-quality results and attention to detail exceeded my expectations. He communicates effectively and ensures that every project runs smoothly from start to finish.</p>
          </div>

          <div className="testimonials-item">
            <img src="/images/personal_image-removebg-preview.png" alt="Yousef" />
            <h3>Yousef</h3>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>Mootaz has a unique ability to turn ideas into beautifully crafted solutions. His creativity and technical expertise made the process seamless, and the final product was exactly what I envisioned. Highly recommend him for front-end and back-end development projects!</p>
          </div>

          <div className="testimonials-item">
            <img src="/images/zaid-removebg-preview.png" alt="Zaid" />
            <h3>Zaid Alshanab</h3>
            <div className="rating">
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
              <i className='bx bxs-star' id="star"></i>
            </div>
            <p>Mootaz's problem-solving skills are outstanding. He handled every challenge with professionalism and delivered innovative solutions that improved the functionality of our platform. He's a talented developer you can rely on.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;