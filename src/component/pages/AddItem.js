import React from "react";

const AddItem = () => {
  return (
    <div >
      <form>
        <ul>
          <div>
            <label htmlFor="">Item name : </label>
            <input type="text" />
            <br />
            <label htmlFor="">Item Price : </label>
            <input type="text" />
            <br />
            <label htmlFor="">Item Description : </label>
            <input type="text" />
            <br />
            <label htmlFor="">Item Review : </label>
            <input type="text" />
            <br />
            <button>Add Item</button>
          </div>
        </ul>
      </form>
    </div>
  );
};

export default AddItem;
