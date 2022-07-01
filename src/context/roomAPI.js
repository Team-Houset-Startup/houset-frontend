import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

const GetRoomDataContext = createContext();

export function GetRoomDataProvider({ children }) {
    const [rooms, setRooms] = useState([]);
    const url = process.env.REACT_APP_URL;

    useEffect(() => {
        const getData = async () => {
            await axios
                .get(`${url}/room`, {})
                .then((res) => setRooms(res.data))
                .catch((error) => console.log(error));
        };
        getData();
    }, []);

    const changeWishlist = (type, id, favorite) => {
        // function to change fav through API
        switch (type) {
            case "room":
                const editWishlist = () => {
                    axios.patch(`${url}/room/${id}`, { fav: !favorite });
                };
                editWishlist();
                break;
            // case "product":

            default:
                break;
        }
    };

    useEffect(() => {
        console.log(rooms);
    }, [rooms]);

    return (
        <GetRoomDataContext.Provider
            value={{ rooms, setRooms, changeWishlist }}
        >
            {children}
        </GetRoomDataContext.Provider>
    );
}
export default GetRoomDataContext;
