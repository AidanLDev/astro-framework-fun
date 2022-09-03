import {useState} from 'react';
import Heading from './Heading';

import List from './List';

import Styles from './styles.module.scss';

export default function ReactExample() {
  const [item, setItem] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    setItems(items => [...items, item]);
    setItem('');
  }
  
  return (
    <div className={Styles.wrapper}>
       <Heading title='React App' />
       <div className={Styles.todoWrapper}>
       <div className={Styles.inputWrapper}>
          <input type='text' onChange={e => setItem(e.target.value)} value={item} />
          <button onClick={addItem}>Add Item</button>
        </div>
        <List items={items} />
       </div>
    </div>
  )
}