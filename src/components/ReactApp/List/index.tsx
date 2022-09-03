import ListItem from './ListItem';

interface IProps {
  items: string[];
}

export default function List({items}: IProps) {
  return (
    <ul>
      {items.map((item, idx) => <ListItem key={`${item}__${idx}`} item={item} />)}
    </ul>
  )
}