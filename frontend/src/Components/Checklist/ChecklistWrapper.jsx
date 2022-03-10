import React from 'react'
import styles from './checklist.module.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckListItem from './CheckListItem';
import CheckListAddItem from './CheckListAddItem'
import CheckListProgress from './CheckListProgress';

const ChecklistWrapper = ({title, items, id}) => {
  return (
    <div className={styles.checklist}>
        {/* Header */}
        <div className={styles.checklistHeader}>
            <CheckBoxOutlinedIcon sx={{color:"#42526e"}} />
            <div className={styles.checklistTitle}>
                <h3>{title}</h3>
                <button className={styles.checklistButton}>Delete</button>
            </div>
        </div>

        {/* Progress Bar */}
        <CheckListProgress />

        <div className={styles.checkListItemsList}>
                {items?.map(el => <CheckListItem {...el} key={el.id} />)}
        </div>
        <CheckListAddItem id={id} />
    </div>
  )
}

export default ChecklistWrapper