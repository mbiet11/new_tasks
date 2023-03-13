import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Mbiet Uko.
            </header>
            <hr></hr>
            <h2>Hello World</h2>
            <div>
                Some Things I love:
                <ul>
                    <li> Soccer </li>
                    <li> Bread </li>
                    <li> Afrobeats </li>
                </ul>
                <div className="con">
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

            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;

/*Have a two-column layout on the page somwhere

Put a red-filled rectangle in each column
 using a div tag with width, height, and 
 backgroundColor styles.
 */
