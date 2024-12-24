import { SearchItem } from '@/types/Search';

interface SearchListProps {
  data: SearchItem[];
  onClickItem: (item: SearchItem) => void;
}

export default function SearchList({ data, onClickItem }: SearchListProps) {
  return (
    <div className="absolute w-full top-[100%] bg-white mt-1 p-1">
      {data.map((item) => (
        <div
          key={item.addressName}
          className="text-gray-400 cursor-pointer hover:text-gray-900"
          onClick={() => onClickItem(item)}>
          {item.placeName}
        </div>
      ))}
    </div>
  );
}
