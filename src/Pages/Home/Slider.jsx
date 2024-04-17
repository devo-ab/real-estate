
const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/sale-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute bottom-5 left-5">
        <p className="text-lg font-medium text-white">Offer Price: $102000</p>
        <button className="btn btn-ghost bg-violet-600 text-white font-medium">Buy Now</button>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <img src="/sale-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute bottom-5 left-5">
        <p className="text-lg font-medium text-white">Offer Price: $10000</p>
        <button className="btn btn-ghost bg-violet-600 text-white font-medium">Buy Now</button>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <img src="/sale-3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute bottom-5 left-5">
        <p className="text-lg font-medium text-white">Offer Price: $13000</p>
        <button className="btn btn-ghost bg-violet-600 text-white font-medium">Buy Now</button>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full">
    <img src="/sale-4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    <div className="absolute bottom-5 left-5">
        <p className="text-lg font-medium text-white">Offer Price: $25000</p>
        <button className="btn btn-ghost bg-violet-600 text-white font-medium">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Slider;