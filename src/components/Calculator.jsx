import { useState, useEffect } from 'react';
import Button from "./Button.jsx";
import "./Calculator.css";



export default function Calculator(){

    const [expression, setExpression] = useState("");

    const addToExpression = (symbol) => {
        setExpression(prev => prev + symbol);
    }
    
    const handleSubmit = () => {
        const result = eval(expression);
        setExpression(String(result));
    }

 
        useEffect(() => {
            const handleKeyPress = (event) => {
                if(Number.isInteger(parseInt(event.key)) || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/'){
                    addToExpression(event.key);
                }
                else if(event.key === 'Enter'){
                    handleSubmit();
                }
                else if(event.key === 'Backspace'){
                    setExpression(prev => {
                        if(!prev || prev.length === 0){
                            return "";
                        }
                        return prev.slice(0, -1);
                    });
                }
            }

            window.addEventListener('keydown', handleKeyPress);

            return() => {
                window.removeEventListener('keydown', handleKeyPress);
            }
        },[addToExpression, handleSubmit]);
    
    return(
        <>
        <p id="expression">{expression || ""}</p>
        <div className="calculator">

            < Button symbol="0" addSymbol={addToExpression}/>
            < Button symbol="1" addSymbol={addToExpression}/>
            < Button symbol="2" addSymbol={addToExpression}/>
            < Button symbol="3" addSymbol={addToExpression}/>
            < Button symbol="4" addSymbol={addToExpression}/>
            < Button symbol="5" addSymbol={addToExpression}/>
            < Button symbol="6" addSymbol={addToExpression}/>
            < Button symbol="7" addSymbol={addToExpression}/>
            < Button symbol="8" addSymbol={addToExpression}/>
            < Button symbol="9" addSymbol={addToExpression}/>
            < Button symbol="+" addSymbol={addToExpression}/>
            < Button symbol="-" addSymbol={addToExpression}/>
            < Button symbol="*" addSymbol={addToExpression}/>
            < Button symbol="/" addSymbol={addToExpression}/>
            < Button symbol="Submit" addSymbol={handleSubmit}/>
            
        </div>
        </>
    )

}