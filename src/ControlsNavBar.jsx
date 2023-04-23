import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button } from "./Button";

export default function ControlsNavBar({
  running,
  play,
  pause,
  setPattern,
  clear,
  setSpeed,
}) {
  return (
    <div className="controls" id="control">
      <Navbar bg="custom" variant="light">
        <Nav>
          <Nav.Item>
            <Button variant="custom" onClick={!running ? play : pause}>
              {!running ? "Start Simulation" : "Stop Simulation"}
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button
              variant="custom"
              disabled={running ? true : ""}
              onClick={() => setPattern(0)}
            >
              Randomize
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="custom"
              disabled={running ? true : ""}
              onClick={() => setPattern(1)}
            >
              P1
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              variant="custom"
              disabled={running ? true : ""}
              onClick={() => setPattern(2)}
            >
              P2
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button
              variant="custom"
              onClick={clear}
              disabled={running ? true : false}
            >
              Clear Board
            </Button>
          </Nav.Item>

          <NavDropdown title="Speed">
            <NavDropdown.Item onClick={() => setSpeed(3)}>
              Fast
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSpeed(2)}>
              Average
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setSpeed(1)}>
              Slow
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}
