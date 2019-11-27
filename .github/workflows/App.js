import React from 'react';
import logo from './logo.svg';
import pil from './pil1.png';
import './App.css';

let i = 0;
function App(props) {
  const clicked = event =>{
    i++;
    console.log(i);

  }
 
  
  return (
   
    
  <div className = "App">
    <p>hej</p>
      <div className ="fullBox">
        
        <div className ="upperBox">
          <p className ="largeP">Skatt och avgifter</p>
          <ul>
            <li>
              <p>Hämta skatt från kommun</p>              
              <input type="text"   />
              <button className="button" >
                Hämta Skatt
                
              </button>
            </li>

            <li>
              <p>Skatt (%)</p>
              <input type="text"  />
            </li>
            
            <li>
              <p>Kyrko- /samfundsavgift (%)</p>
              <input type="text"  />
            </li>
          </ul>
        </div>
        <div className ="middleBox">
        <p className ="largeP">Inkomst</p>
          <ul>
            <li>
              <p>Lön (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Förmåner (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Arbetslösheteersättning (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Sjuk-/föräldrarpenning (kr/månad)</p>
              <input type="text"  />
            </li>
            <li>
              <p>Sjuk-/aktivitetsersättning (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Pension (kr/månad)</p>
              <input type="text"  />
            </li>

            
            <li>
              <p>Vårdbidrag (kr/månad)</p>
              <input type="text"  />
            </li>

            

          </ul>

        </div>
        <div className ="lowerBox">
          <p className="largeP">Skattefria inkomster</p>
          <ul>
            <li>
              <p>Studiestöd (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Barnbidrag (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Underhållsbidrag (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Sjuk-/föräldrarpenning (kr/månad)</p>
              <input type="text"  />
            </li>
            <li>
              <p>Bostadsbidrag (kr/månad)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Övrigt (kr/månad)</p>
              <input type="text"  />
            </li>
          </ul>
        </div>

        <div className ="lowerBox2">
          <p className="largeP">Kapitalinkomster och uppskov</p>
          <ul>
            <li>
              <p>Kapitalinkomster (kr/år)</p>
              <input type="text"  />
            </li>

            <li>
              <p>Underlag uppskov (kr)</p>
              <input type="text"  />
            </li>
          </ul>

        </div>       
         
      </div>

      <div className = "sendClass" >
        
      

        <button onClick={clicked} className="send">
         
        </button>
        

      </div>

      <img src={logo}></img>

  </div>    

      
     

    
  );
}

export default App;
