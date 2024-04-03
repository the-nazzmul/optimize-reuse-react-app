import LazyLoad from "react-lazyload";

const LazyLoading = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Lazy Loading Images 🏞️</h1>

      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-1.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-2.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-3.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-4.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-5.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-6.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-7.jpeg" />
        </LazyLoad>
      </div>
      <div className="my-4">
        <LazyLoad height={200} offset={100}>
          <img src="/picture-8.jpeg" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default LazyLoading;
