import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import NavbarCanvas from "./NavbarCanvas";
import Unity, { UnityContext } from "react-unity-webgl";

import "./assets/style/canvas.css";

const unityContext = new UnityContext({
    loaderUrl: "Build/Web.loader.js",
    dataUrl: "Build/Web.data",
    frameworkUrl: "Build/Web.framework.js",
    codeUrl: "Build/Web.wasm",
});

function Canvas() {
    let navigate = useNavigate();

    return (
        <>
            <NavbarCanvas />
            <Container fluid>
                <Row>
                    <Col>
                    <Unity unityContext={unityContext} className="canvas-houset" />
                    </Col>
                </Row>
            </Container>
            {/* <Unity unityContext={unityContext} className="canvas-houset" /> */}
        </>
    )
}

export default Canvas