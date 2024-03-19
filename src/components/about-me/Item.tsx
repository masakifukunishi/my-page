interface ItemProps {
  item: string;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return <p className="my-1">{item}</p>;
};

export default Item;
