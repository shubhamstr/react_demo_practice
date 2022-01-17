import React, {useState, useEffect} from "react";
// import './ToDo.css'

const ToDo = () => {
    const [list, setList] = useState([]);
    const [val, setVal] = useState('');

    const save = (e) => {
        setVal(e.target.value);
    }

    const addEl = () => {
        setList((obj)=> [...obj, val]);
        setVal('');
    }

    useEffect(()=>{
        // setList([]);
    },[]);
    return (
        <>
        <div className="container">
        <h1>ToDo App</h1>
            <input className="form-control" onChange={save} value={val} />
            <button className="btn btn-info" onClick={addEl}>add</button>
            <ol>
                {list.map((val)=>(
                    <li>{val}</li>
                ))}
            </ol>
        </div>
        </>
    )

}
    
    
    

export default ToDo;