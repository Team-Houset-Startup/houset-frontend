import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import NavbarCanvas from "./NavbarCanvas";
import Unity, { UnityContext } from "react-unity-webgl";

import "./assets/style/canvas.css";

function Canvas() {
    const [state, setState] = useState({
        progression: 0,
        isLoaded: false
    });

    const unityContext = new UnityContext({
        loaderUrl: "Build/Web.loader.js",
        dataUrl: "Build/Web.data",
        frameworkUrl: "Build/Web.framework.js",
        codeUrl: "Build/Web.wasm",
    });

    unityContext.on("progress", (progression) => {
        setState({
            progression: progression,
        });
    });

    unityContext.on("loaded", () => {
        setState({
            isLoaded: true,
        });
    });

    // const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    //     loaderUrl: "Build/Web.loader.js",
    //     dataUrl: "Build/Web.data",
    //     frameworkUrl: "Build/Web.framework.js",
    //     codeUrl: "Build/Web.wasm",
    // });

    return (
        <>
            <NavbarCanvas />
            <Container className="canvas-container">
                <Row>
                    <Col>
                        <p className="canvas-loader-progression"> Loading Application... {Math.floor(state.progression * 100)}% </p>
                        <Unity unityContext={unityContext} className="canvas-houset" />
                    </Col>
                </Row>
            </Container>
            {/* <Unity unityContext={unityContext} className="canvas-houset" /> */}
        </>
    )
}

export default Canvas