import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [classes.myModal]
  if (visible) {
    rootClasses.push(classes.active)
  }


  //  onClick={(e) => e.stopPropagation()} - предотвращает закрытие формы при клике на ней,
  //  ибо ( onClick={() => setVisible(false)}) делает всю форму невидимой, а не только бекграунд
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;