import { useState } from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
    color: ${({ secondary }) => secondary ? "royalblue" : "snow"};
    background-color: ${({ secondary }) => secondary ? "whitesmoke" : "royalblue"};
    border: 2px solid royalblue;
    border-radius: 2px;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
        background-color: gainsboro;
    }
    @media (max-width: 768px) {
        font-size: 32px;
    }
`

function MyDiv(props) {
    return <div>{props.children}</div>
}

const StyledMyDiv = styled(MyDiv)`
    margin: 50px;
`

const EvenMoreStyledButton = styled(Button)`

`

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
            <Button>This is a button</Button>
            <Button secondary>This is a secondary button</Button>
        </>
    )
}
