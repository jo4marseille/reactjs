import React from 'react';

import "./ContainerDiag.css"
import PictureAixRugby from "../../assets/images/logo_aix.png"
import PictureCbruRugby from "../../assets/images/cbru_logo_clean.png"

const ContainerDiag = () => {
    return (
        <div className="ctn_diag">
            <div className="div_triangle_left"/>
            <div className="div_triangle_right"/>

            {/*<div className="div_ctn">*/}
            <div className="div_ctn_content">
                <div className="content_triangle_left" style={{}}>
                    <div className="div_img_ctn_left">
                        <div className="test"/>
                    </div>
                </div>

                <div className="content_triangle_right" style={{}}>
                    <div className="div_img_ctn_right">
                        <div className="test2"/>
                    </div>
                </div>
            </div>

            {/*</div>*/}
        </div>
    );
};

export default ContainerDiag;
