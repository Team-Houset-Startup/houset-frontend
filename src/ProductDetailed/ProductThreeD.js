import ReactThreeFbxViewer from 'react-three-fbx-viewer'
import Kursi from "./assets/image/kursi.png"

export default function ProductThreeD(assetFbx) {

    const cameraPosition = {
        x: 100,
        y: 100,
        z: 500
    }

    return (
        <>
            {/* <img src={Kursi} alt="kursi" /> */}
            <ReactThreeFbxViewer
                cameraPosition={cameraPosition}
                url={assetFbx}
            />
        </>
    )
}
