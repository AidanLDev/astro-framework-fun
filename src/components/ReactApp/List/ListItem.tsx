import Styles from '../styles.module.scss';
import {useState} from 'react';

interface IProps {
  item: string;
}

const deleteSVGPath = 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z';
const checkBoxOutlineSVGPath = 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z';
const checkedBoxSVGPath = 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';

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