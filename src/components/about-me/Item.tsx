interface ItemProps {
  item: string;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return <li className="my-1">{item}</li>;
};

export default Item;
