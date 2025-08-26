

export default function Button(props){


    return(
        <button onClick = {() => props.addSymbol(props.symbol)}>
            {props.symbol}
        </button>
    )
}
