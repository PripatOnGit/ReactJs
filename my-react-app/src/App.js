import './App.css';
import {React} from 'react';
function App() {
  return (
    <div className='App'>
      <h1>Hello - Again</h1>
      <form>
        <button onClick={findPrimeNumber}>Click to check!!</button>
      </form>
    </div>
  );
}


/*class App extends React.Component {
  render(){
  return <h3>Hello world</h3>
  }
}*/

function findPrimeNumber() {
    const num = parseInt(prompt("Enter a positive number: "));
    //let num = document.getElementById("num");
    //console.log(num);
    let numIsPrime = true;
    if (num === 1) {
    console.log("1 is neither prime nor composite number.");
    }
    else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            numIsPrime = false;
            break;
        }
    }
    
    if (numIsPrime) {
       //let res = document.getElementsById('result');
       //res.innerHTML = "Prime Number";
        window.alert("prime number");
    } else {
        window.alert("Not prime number");
    }

}
}
export default App;

