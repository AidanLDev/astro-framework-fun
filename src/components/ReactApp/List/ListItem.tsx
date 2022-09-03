import Styles from '../Styles.module.scss';

interface IProps {
  item: string;
}

export default function ListItem({item}: IProps) {
  return (
    <div className={Styles.listItem}>
      <li>{item}</li>
    </div>
  )
}