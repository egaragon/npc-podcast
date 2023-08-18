import * as React from "react"

const pageStyles = {
    padding: 10,
    color: "#bd9bfa",
    backgroundColor: "#1f0154",
    textAlign: "center",
}

const heading = {
    fontSize: "5rem",
}

const bodyStyles = {
    color: "#cacae0",
    fontSize: "1.5rem",
    textAlign: "center",
}

const IndexPage = () => {
    return (
            <main style={pageStyles}>
                <h1 style={heading}>Welcome to Notoriously Poor Choices!</h1>
                <div style={bodyStyles}>
                    This website is currently being built 😁
                </div>
            </main>
    )
}

export default IndexPage

export const Head = () => <title>NotoriouslyPoorChoices.com</title>
