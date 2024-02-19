import { useState } from 'react'

function Button(props) {
    const { children } = props
    return <button {...props}>{children}</button>
}

function PhotoCard(props) {
    const { url, caption } = props
    const [ isFaved, setIsFaved ] = useState(false)
    return (
        <div>
            <div>
                <Button onClick={() => setIsFaved(prev => !prev)}>
                    {isFaved ? "♥" : "♡"}
                </Button>
            </div>
            <div>
                <img src={url} alt={caption} />
            </div>
            <p>{caption}</p>
        </div>
    )
}

export default function App() {
    return (
        <>
            <h1>What a boring app...</h1>
        </>
    )
}
