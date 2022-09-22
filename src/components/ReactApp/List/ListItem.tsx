import Styles from '../styles.module.scss';
import { deleteSVGPath, checkBoxOutlineSVGPath, checkedBoxSVGPath } from '../../../lib/Icons'
import {useState} from 'react';

interface IProps {
  item: string;
}



const deleteSVG = <svg viewBox='0 0 24 24' height='19px' width='24px' cursor='pointer' onClick={() => console.log('delete clicked')}><path d={deleteSVGPath} fill='gray'></path></svg>;
const checkedSVG = <svg viewBox='0 0 24 24' height='23px' width='24px'><path d={checkedBoxSVGPath} fill='green'></path></svg>;


export default function ListItem({item}: IProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const chechBoxOutlineSVG = <svg viewBox='0 0 24 24' height='23px' width='24px' cursor='pointer' onClick={() => setChecked(true)}><path d={checkBoxOutlineSVGPath} fill='gray'></path></svg>;

  return (
    <div className={Styles.listItem}>
        <div>
          {checked ? checkedSVG : chechBoxOutlineSVG}
          <span className={checked ? Styles.listItemChecked : ''}>
            {item}
          </span>
          {deleteSVG}
        </div>
    </div>
  )
}