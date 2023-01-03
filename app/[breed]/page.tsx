import Image from "next/image";
import FavoriteImage from "../../components/FavoriteImage";

interface Props {
  params: {
    breed: string;
  };
}

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



const BreedPage = async ({ params: { breed } }: Props) => {
  const { message: images } = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/10`
  ).then((res) => res.json() as Promise<{ message: string[] }>);

  return (
    <section className="grid grid-cols-3 mt-24 gap-6">
      {images.map((image) => (
        <FavoriteImage key={image} src={image} />
      ))}
    </section>
  );
};

export default BreedPage;
