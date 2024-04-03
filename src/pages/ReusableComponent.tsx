import ProductCard from "../components/reusable-component/ProductCard";

const ReusableComponent = () => {
  const handleBuyNow = () => {
    alert("Added to your Cart");
  };
  const handleAddToWishList = () => {
    alert("Added to your wishlist");
  };

  return (
    <div className="flex justify-center items-center h-full">
      <ProductCard
        title="Product-1"
        imgSrc="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1712090709~exp=1712094309~hmac=9597750dfc848f33a74756f5cd7e98662f0aed2a5d25e0ecead5465f96c3b369&w=2000"
        price={29.99}
        action={handleBuyNow}
        actionLabel="Buy Now"
        secondaryAction={handleAddToWishList}
        secondaryActionLabel="Add To Wishlist"
      />
    </div>
  );
};

export default ReusableComponent;
