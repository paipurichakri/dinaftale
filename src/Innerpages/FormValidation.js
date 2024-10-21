import axios from 'axios'
import React, {useState} from 'react'
import innerStyles from "../Innerpages/innerpages.module.css"
const FormValidation = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [setStatus] = useState(false);

    const addform = (e) => {
        e.preventDefault();
        let alphaex = /^[a-z A-Z]+$/
        let numex = /^[0-9]+$/;
        let addressex = /^[a-z A-Z 0-9]+$/;

        if (id === "") {
            document.getElementById("idnote").innerHTML = "pls enetr the id";
        }
        else {
            if (id.match(numex)) {
                document.getElementById("idnote").innerHTML = "";
            }
            else {
                document.getElementById("idnote").innerHTML = "pls enter digits only";
                setStatus(false);
            }
        }

        if (name === "") {
            document.getElementById("namenote").innerHTML = "pls enetr the name";
        }
        else {
            if (name.match(alphaex)) {
                document.getElementById("namenote").innerHTML = "";
                setStatus(true);
            }
            else {
                document.getElementById("namenote").innerHTML = "pls enter characters only";
            }
        }

        if (address === "") {
            document.getElementById("addressnote").innerHTML = "pls enetr the adddress";
        }
        else {
            if (address.match(addressex)) {
                document.getElementById("addressnote").innerHTML = "";
                setStatus(true);
            }
            else {
                document.getElementById("addressnote").innerHTML = "pls enter valid address";
                setStatus(false);
            }
        }

        axios.post("http://localhost:3000", { id, name, address })

            .then((res) => {
                alert("data added suc....")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <div className={`container ${innerStyles.errmsg}`}>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <form onSubmit={addform} >
                            <div>
                                <input type="id" name="id" placeholder='Id' className='form-control mb-3' value={id} onChange={(e) => setId(e.target.value)} />
                                <div id="idnote" className='errmsg'></div>
                            </div>
                            <div>
                                <input type="text" name="name" placeholder='Name' className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)} />
                                <div id="namenote" className='errmsg'></div>
                            </div>
                            <div>
                                <input type="text" name="address" placeholder='Address' className='form-control mb-3' value={address} onChange={(e) => setAddress(e.target.value)} />
                                <div id="addressnote" className='errmsg'></div>
                            </div>
                            <div>
                                <input type="submit" value="submit" className='btn btn-primary' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormValidation
