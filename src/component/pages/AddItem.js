import React, { useRef, useState } from "react";
import { connect } from "react-redux"

const AddItem = (props) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [review, setReview] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(props.state);
    
  }

  const addItem = () => {
    return {
      items : props.item.push()
    }
  }

   return (
    <div >
      <form onSubmit={addItem}>
        <ul>
          <div>
            <label htmlFor="">Item name : </label>
            <input type="text"
             value={name}
             onChange={(e) => {
               setName(e.target.value);
             }}
             />
            <br />
            <label htmlFor="">Item Price : </label>
            <input type="text" 
             value={price}
             onChange={(e) => {
               setPrice(e.target.value);
             }}
              />
            <br />
            <label htmlFor="">Item Description : </label>
            <input type="text" 
             value={desc}
             onChange={(e) => {
               setDesc(e.target.value);
             }}/>
            <br />
            <label htmlFor="">Item Review : </label>
            <input type="text"
             value={review}
             onChange={(e) => {
               setReview(e.target.value);
             }}
              />
            <br />
            <button>Add Item</button>
          </div>
        </ul>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item : state.items,
  }
};

const mapDispatchToProps = dispatch => ({
  addItem: () => dispatch({ type: 'ADD_ITEM' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
