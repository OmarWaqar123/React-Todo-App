import React from 'react'
import "../CSS/List.css"

// export default function List(props) {

//   return (
//     <div className='list'>
//         {props.Todo.map((item,index) => {
//             return <>
//                      <p className='Msg'>{item}</p>
            
 
//                     <button 
//                     className='remove'
//                     onClick={() => props.remove(index)}
//                     >Remove</button>  
//                   </>
//         })}

//     </div>

//   )
// }

export default function List(props) {
  return (
    <div className="list">
      {props.Todo.map((item, index) => (
        <div className='check' key={index}>
          {props.editIndex === index ? (
            <>
              <input
                className="edit-input"
                value={props.editedText}
                onChange={(e) => props.setEditedText(e.target.value)}
              />
              <button
                className="edit-btn"
                onClick={() => props.handleClick()}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="Msg">{item}</p>
              <button
                className="edit"
                onClick={() => props.handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="remove"
                onClick={() => props.remove(index)}
              >
                Remove
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}