import ListItem from './ListItem';

interface IProps {
  items: string[];
}

export default function List({items}: IProps) {
  return (
    <div>
      {items.map((item, idx) => <ListItem key={`${item}__${idx}`} item={item} />)}
    </div>
  )
}