import React from 'react';

const Demo = (props) => (
    <>
        <button onClick={props.fun}>update</button>
        <h1>hello {props.name[1]}</h1>
    </>
)
export default Demo;
