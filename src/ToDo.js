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
            <h1 className="text-center">ToDo App</h1>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <div className="form-group">
                        <div className="input-group">
                            <input className="form-control" onChange={save} value={val} />
                            <div className="input-group-append">
                                <button className="btn btn-info" onClick={addEl}>add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 offset-md-5">
                    <div className="text-left">
                        <ol className="mt-4 mt-md-5" style={{fontFamily: "cursive", fontSize: "20px", listStyle: "inside"}}>
                            {list.map((val)=>(
                                <li>{val}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}
    
    
    

export default ToDo;