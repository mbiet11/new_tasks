import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Mbiet Uko.
            </header>
            <h2>Hello World</h2>
            <div>
                Some Things I love:
                <ul>
                    <li> Soccer </li>
                    <li> Bread </li>
                    <li> Afrobeats </li>
                </ul>
                <div className="con 1">
                    <Container>
                        <Row>
                            <Col>
                                Chelsea is the best sports team in the world.
                            </Col>
                            <Col>They are 2x UCL winners and 6x Pl winners</Col>
                        </Row>
                    </Container>
                </div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <img src={require("./images/Chelsea.jpg")} alt="Chelsea FC Logo" />

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;

/*Have a two-column layout on the page somwhere

Put a red-filled rectangle in each column
 using a div tag with width, height, and 
 backgroundColor styles.
 */
