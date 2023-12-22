import React from 'react';
import './style/Home.css';
import topImage from './Images/cl.png';
import sideImage from './Images/1.jpg';
import vc from './Images/vc.jpeg'

function Home() {
  return (
    <div className="home">
      <div className="top-image">
        <img src={topImage} alt="Top Image" />
      </div>

      <div className="heading">
        <h1>Welcome to Quaid-i-Azam University</h1>
      </div>

      <div className="section">
        <div className="left-content">
          <h2>Introduction</h2>
          <p className="introp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor nisl quis
            tincidunt convallis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            nobis tempore ex? Alias sed tempore excepturi ratione suscipit neque voluptatibus ab
            fuga veritatis, a totam, illum architecto, repudiandae voluptatum! Eveniet officiis
            perspiciatis accusamus nesciunt magnam molestias cupiditate debitis at labore deleniti
            rem possimus, distinctio soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum id possimus aut enim pariatur provident similique minus, molestias nisi tempora quis? Obcaecati consequatur deleniti reiciendis qui possimus est voluptates similique!
          </p>
        </div>

        <div className="right-picture">
          <img src={sideImage} alt="Side Image" />
        </div>
      </div>

      <div className="section">
        <div className="left-picture">
          <img src={vc} alt="Side Image" />
        </div>

        <div className="right-content">
          <h2>Message from Vice Chancellor</h2>
          <p className="introp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor nisl quis
            tincidunt convallis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            nobis tempore ex? Alias sed tempore excepturi ratione suscipit neque voluptatibus ab
            fuga veritatis, a totam, illum architecto, repudiandae voluptatum! Eveniet officiis
            perspiciatis accusamus nesciunt magnam molestias cupiditate debitis at labore deleniti
            rem possimus, distinctio soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit excepturi voluptate molestiae modi laudantium voluptatem ullam, ea reprehenderit harum qui consequuntur, architecto veritatis quae aut dicta quidem, fuga esse sunt?
          </p>
        </div>
      </div>

      <div className="current-news">
        <h2>Current News</h2>
        <div className="news-cards">
      
          <div className="news-card">
            <img src={sideImage} alt="News 1" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facere laborum ex, libero mollitia voluptatem ipsam. Nostrum excepturi reiciendis labore! Facere dolore, neque odio, molestias optio ipsam eligendi in cum deserunt reprehenderit, fugiat nulla vel aliquid voluptatum placeat eos repudiandae error distinctio quis nisi perspiciatis!</p>
            <button>Read More</button>
          </div>

          <div className="news-card">
            <img src={sideImage} alt="News 2" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nulla sapiente debitis accusantium facere tempore eius fuga ratione alias accusamus rerum, exercitationem, veniam labore perspiciatis ipsa excepturi? Explicabo quidem ut quam repellat dolorum in quos omnis, dolores, fuga asperiores ducimus magni fugiat iure, culpa numquam..</p>
            <button>Read More</button>
          </div>

          <div className="news-card">
            <img src={sideImage} alt="News 3" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempora, voluptatum omnis quas animi possimus ut velit maxime accusamus aliquid iste sequi minus corporis tenetur quis non dolorum pariatur expedita commodi vitae, sapiente odit! Eum recusandae labore animi molestias corporis voluptatibus neque quam dolore fugiat..</p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
