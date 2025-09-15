import React from "react";
import "./App.css";
import { Button, Row, Col, Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header role="banner">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "red" }}>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Xiankang Hello World
            </h1>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <Col>
                            First
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    color: "red",
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second Column
                            <img
                                src="https://i.ytimg.com/vi/4AYBDdepQ9Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAboeQXEHAjuvAASCwkhyiUZ4i27A"
                                alt="Nitori Kawashiro firing an palm-mounted directed energy weapon"
                            ></img>
                            <div
                                style={{
                                    width: 100,
                                    height: 100,
                                    color: "red",
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
                <ol>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ol>
            </div>
        </div>
    );
}

export default App;
