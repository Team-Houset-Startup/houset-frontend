import React from "react";
import { useNavigate } from 'react-router-dom';
import NavbarCanvas from "./NavbarCanvas";
import  Unity ,  {  UnityContext  }  from  "react-unity-webgl";

const  unityContext  =  new  UnityContext ( { 
  loaderUrl : "build/myunityapp.loader.js" , 
  dataUrl : "build/myunityapp.data" , 
  frameworkUrl : "build/myunityapp.framework.js" , 
  codeUrl : "build/myunityapp.wasm" , 
} ) ;

function Canvas() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <>
            <NavbarCanvas />
            <section>
                <div>
                    Kanvas desain
                </div>
                <button type="button" onClick={handleClick}>
                    Go home
                </button>
            </section>
            <Unity unityContext = { unityContext }/>
        </>
    )
}

export default Canvas