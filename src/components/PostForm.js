import { React } from "react";
import Axios from "axios";

function PostForm() {
    return (
        <div>
            <form>
                <input placeholder="Company Name" type="text"></input>
                <input placeholder="Contact" type="number"></input>
                <input placeholder="Email" type="Email"></input>
            </form>
        </div>
    );
}