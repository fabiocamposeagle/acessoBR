import React from 'react';
import './curator.scss';
import CuratorPhoto from '../../images/fa.png'

function CuratorItem() {

    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={CuratorPhoto} alt="Foto curador Fabio Campos"/>
            </div>
            <div className="curator__details">
                <div className="">
                    <h3>Fábio Campos</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Desenvolvedor web Front-end e back-end</p>
            </div>
        </div>
    )
}
export default CuratorItem;