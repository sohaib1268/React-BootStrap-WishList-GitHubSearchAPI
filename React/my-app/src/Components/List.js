import React, {useRef, useState} from 'react'
import './List.css';


export default function List() {
    

    const [wishListItems,addItemsToList] = useState([]);
    const [text,setText] = useState('Enter Wishlist Item Here');
    const [priority,setSelectedPriority] = useState("");
    const [itemIndex,setItemIndex] = useState(-1);
   
    const myOnChangeHandler = (event) =>{
        setText(event.target.value);
    };

     const handleSelect = (event) =>{
        setSelectedPriority(event.target.value);
    };

    const handleChange = (event) =>{
       
        let x = getitemindex();
        if(x < 0)
        {
            return false;
        }
        let updatedWishListItems = [...wishListItems];
        updatedWishListItems[x].priority = event.target.value;
        addItemsToList(updatedWishListItems);
    };

    const addWishListHandler = () => {
        addItemsToList([...wishListItems,{text,priority}]);
        setText('');
        setSelectedPriority('');
    };


    const getitemindex = () =>{
        return itemIndex;
    };

    const deleteWishListHandler = () => {
        let x = getitemindex();
        const updatedWishListItems = wishListItems.filter((item, index) => {
            return index !== x;
          });
          addItemsToList(updatedWishListItems);
    };

    
    const clickHandler = (index) => {
        setItemIndex(index);
        console.log(index);
        
        const liElements = document.querySelectorAll('li');
        const liElement = liElements[index];
  
        for(let i=0; i<liElements.length; i++)
        {
            if(i !== index)
            {
                liElements[i].classList.remove('clicked');
            }
        }
  
        liElement.classList.toggle('clicked');
        
    };

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e,position) => {
        dragItem.current = position;
        console.log(e.target.innerHTML);
    };
    
    const dragEnter = (e,position) => {
        const listGroupItems = document.querySelectorAll('.list-group-item');
        for (let i = 0; i < listGroupItems.length; i++) {
          if (listGroupItems[i] === e.target) {
            dragOverItem.current = { position: i };
            break;
          }
        }
    };

    const drop = (e) => {

        const copyListItems = [...wishListItems];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current.position, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        addItemsToList(copyListItems);
    };


  
  return (
    <>
    <div className="container my-4">
      <h1>My Wishlist</h1>
    </div>
    <div className="container">
        <div className="mb-3 my-4">
            <textarea className="form-control" id="textArea" value={text} onChange={myOnChangeHandler} rows="1"></textarea>
        </div>
    </div>
    <div className="container">
        <select className="form-select" id="mydropdown" value={priority} onChange = {handleSelect} aria-label="Default select example">
            <option selected>Select Priority</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <div className="container my-4">
        <button type="button" className="btn btn-success" onClick={addWishListHandler}>Add To Wishlist</button>
    </div>
    <div className="container my-4">
        <h3>Current Items</h3>
        <ul className="list-group" onDragEnter={(e) =>dragEnter(e)}>
            {wishListItems&& wishListItems.map((wishListItem, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center"  onDragStart={(e) =>dragStart(e,index)}   onDragEnd={drop}  onClick={() => clickHandler(index)} style={{cursor:'pointer'}} key={index} draggable >{wishListItem.text}
                    <span className="badge bg-primary rounded-pill">{wishListItem.priority}</span>
                </li>
            ))}
        </ul>
    </div>
    <div className="container my-4">
        <button type="button" className="btn btn-success" onClick={deleteWishListHandler}>Delete Selected Item From Wishlist</button>
    </div>
    <div className="container my-4">
        <h3>Change Priority of Selected Item</h3>
        <select className="form-select" id="mydropdown" onChange = {handleChange} aria-label="Default select example">
            <option selected>Change Priority of Selected Item</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    </>
  )
}
