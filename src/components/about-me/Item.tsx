interface ItemProps {
  item: string;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return <p className="my-1.5">{item}</p>;
};

export default Item;
