import React, { useState, useEffect } from "react";
import { TarjetaVetComponent, Navbar, FooterComponent } from "../components";
import './Veterinarias.css';
import { getAllPost } from "../services/Post";

const VeterinariasPage = () => {
    const [state, setState] = useState([]);
    const [stateSearch, setStateSearch] = useState("");

    useEffect(() => {
        getPost();
    }, [])

    const getPost = async () => {
        const postBD = await getAllPost();
        setState(postBD)
    }

    return (

        <div>
            <Navbar />
            <div class="grilla">
                <TarjetaVetComponent
                    setPostEditado={setState}
                    Posts={state}
                    searchName={stateSearch}
                    useEffects={useEffect}
                />
            </div>
            <FooterComponent />
        </div>

    );
};
export default VeterinariasPage;