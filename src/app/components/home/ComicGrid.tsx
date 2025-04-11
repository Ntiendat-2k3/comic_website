import { Comic } from "@/app/types/comic";
import ComicCard from "../ComicCard";

interface ComicGridProps {
  comics: Comic[];
}

const ComicGrid = ({ comics }: ComicGridProps) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
    {comics.map((comic) => (
      <ComicCard 
        key={comic._id} 
        comic={comic}
        baseImageUrl={`https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`}
      />
    ))}
  </div>
);

export default ComicGrid;