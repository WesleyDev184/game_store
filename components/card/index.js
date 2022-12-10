import Image from "next/image";
import Link from "next/link";

const CardItem = ({ id, name, background_image, rating, tags }) => {
  return (
    <Link href={`/games/${id}`}>
      <>
        <div class="border rounded-lg shadow-md bg-gray-800 border-gray-700 h-auto w-72 transition hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-300">
          <div class="flex justify-center my-2 px-2 h-36 w-72 overflow-x-auto overflow-y-auto">
            <Image
              className="rounded-md"
              src={background_image}
              alt={name}
              width={300}
              height={200}
            />
          </div>
          <div class="w-full flex justify-between px-2">
            <h5 class="text-xl font-bold tracking-tight text-white truncate">
              {name}
            </h5>
            <span className="bg-green-500 ml-2 px-2 py-0.5 rounded-xl">
              {rating}
            </span>
          </div>
          <div className="ml-2 my-2">
            <span className="bg-slate-500 px-2 rounded-lg py-0.5">
              #{tags[6].name}
            </span>
          </div>
        </div>
      </>
    </Link>
  );
};

export default CardItem;
