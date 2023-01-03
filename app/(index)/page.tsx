import Image from "next/image";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Trailers from "./components/Trailers";

const images = [
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10263.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10715.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10832.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_10982.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_11006.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_11172.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_11182.jpg",
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1126.jpg",
];

const FavoriteImage = ({ src }: { src: string }) => {
  return (
    <div className="relative">
      <img src={src} className="w-72 h-72 object-cover " alt="dog" />
      <button className="w-6 h-6 absolute top-2 right-2 bg-white rounded-full flex items-center justify-center">
        ☆
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <main className="mt">
      <h1 className="text-xl font-bold mt-4">Select a breed above</h1>
    </main>
  );
}
