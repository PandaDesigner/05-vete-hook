
import { useLayoutEffect, useRef, useState } from "react";

export const Quate = ({quote, author}) => {
    
    const quoPRef = useRef();
    
    const [ boxSize, setBoxSize ] = useState({
        width: 0,
        height: 0
    });
    console.log(boxSize, setBoxSize);

    useLayoutEffect(() => {object
        const { width, height } = quoPRef.current.getBoundingClientReact();
        setBoxSize({
            width,
            height
        })
    }, [quote])

return (
    <>
    <blockquote
    className="blockquote text-end"
    style={{display: 'flex'}}
    >
        <p ref={ quoPRef } className="mb-3 h4"> {quote} </p>
        <footer className="blockquote-footer lead fs-6 text-success w-light"> {author} </footer>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    </>
)
}
