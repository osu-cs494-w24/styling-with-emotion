import { useState } from 'react'
import { css } from '@emotion/react'

const themeStyles = css`
    color: indigo;
`

function Banner(props) {
    const { children, warning } = props
    const styles = {
        border: "1px solid forestgreen",
        backgroundColor: "floralwhite",
        color: "forestgreen",
        padding: "20px"
    }
    const warningStyles = {
        color: "firebrick",
        borderColor: "firebrick",
        backgroundColor: "papayawhip"
    }
    return (
        <div css={[ styles, warning && warningStyles ]}>
            {children}
        </div>
    )
}

function Button(props) {
    const { children, secondary, className } = props
    const color = "olivedrab"
    const styles = css`
        color: ${secondary ? "royalblue" : "snow"};
        background-color: ${secondary ? "whitesmoke" : "royalblue"};
        border: 2px solid royalblue;
        border-radius: 2px;
        padding: 10px;
        cursor: pointer;
        &:hover {
            background-color: gainsboro;
        }
    `
    console.log("== props:", props)
    return <button css={styles} className={className}>{children}</button>
}

function PhotoCard(props) {
    const { url, caption } = props
    const [ isFaved, setIsFaved ] = useState(false)
    const styles = css`
        display: inline-block;
        border: 1px solid darkgray;
        padding: 10px;
        img {
            max-width: 100px;
        }
        p {
            text-align: center;
        }
    `
    const buttonStyles = css`
        ${themeStyles};
        border: 0;
        background-color: transparent;
    `
    return (
        <div css={styles}>
            <div>
                <Button css={buttonStyles} onClick={() => setIsFaved(prev => !prev)}>
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
    const styles = css`
        ${themeStyles};
        background-color: lavenderblush;
        margin: 0;
        padding: 10px;
    `
    return (
        <>
            <h1 css={styles}>What a boring app...</h1>
            <Button>Primary button</Button>
            <Button secondary>Secondary button</Button>
            <PhotoCard url="http://placekitten.com/480/480" caption="Kitty" />
            <Banner>This is a regular banner</Banner>
            <Banner warning>This is a warning banner</Banner>
        </>
    )
}
