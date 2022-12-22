import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'; 
// function App() {
//   const [language, setLanguage] = useState('')

//   const handleChange = event => {
//     setLanguage(event.target.value);
//   };

//   function addLanguage() {
//     setLanguage('');
//   }
//   return (
//     <div className="App">
//       <form>
//         {language.map((input, index) =>{
//           return(<div>
//           <lable>Add Laguages You know: </lable>
//           <input type='text' name='lang' value={input.language} onChange={handleChange}></input>
//         </div>
//         )})}
//         <input type='button' value="add" onClick={addLanguage}></input>
//       </form>
//     </div>
//   );
// }

const App=() =>{
  const [inputFileds, setInputFields] = useState([{MobileNo:''}]);

  const addFeilds=() =>{
    let newObj = {MobileNo:''};
    setInputFields([...inputFileds,newObj]);
  }

  const removeFeilds=(index) =>{
    let data = [...inputFileds];
    data.splice(index,1);
    setInputFields(data);
  }

  let handleChange=(index,e) =>{
    let data = [...inputFileds];
    data[index][e.target.name] = e.target.value;
  }

  const submit=(e) =>{
    e.preventDefault();
    console.log(inputFileds);
    console.log(JSON.stringify(inputFileds));
    alert(JSON.stringify(inputFileds));
  }
  return(
    <div>
      <form>
      {inputFileds.map((input, index)=>{
        return(
          <div key={index}>
            <lable>Mobile No:<input type='text' name='MobileNo' value={input.inputFileds} onChange={e=>handleChange(index,e)}></input>
            </lable>
          {
            index?<button type='button' onClick={()=>removeFeilds(index)}>REMOVE</button>:null
          }
          </div>
      )})}
      <div>
      <button type='button' onClick={()=>addFeilds()}>ADD</button>
      <button type='submit'onClick={submit}>SUBMIT</button>
      </div>
      </form>
    </div>
  )
  }
export default App;
