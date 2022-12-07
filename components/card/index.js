import Image from "next/image";

const CardItem = ({ name, background_image }) => {
  return (
    <div>
      <div class="border rounded-lg shadow-md bg-gray-800 border-gray-700 h-auto w-72 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300">
        <div class="flex justify-center mt-2">
          <Image src={background_image} alt={name} width={300} height={200} />
        </div>
        <div class="w-64 flex flex-wrap justify-center">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-white truncate">
            {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
