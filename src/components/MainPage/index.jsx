import React, { useState } from 'react';
import styles from './MainPage.module.css';


const MainPage = ({ children }) => {

    const [items, setItems] = useState([]);

    const addItem = () => {
      const newItem = {
        id: items.length + 1,
        nome: `Item ${items.length + 1}`,
        texto: `Este é o texto do item ${items.length + 1}`,
      };
  
      setItems([...items, newItem]); 
    };
  
    const updateItemText = (id, newText) => {
      setItems(
        items.map(item =>
          item.id === id ? { ...item, texto: newText } : item
        )
      );
    };
  
    const deleteItem = id => {
      setItems(items.filter(item => item.id !== id));
    };

  return (
    <div className={styles.mainPage}>
        { children }
    </div>
  );
};

export default MainPage;