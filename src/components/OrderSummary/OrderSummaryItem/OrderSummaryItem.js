import React from "react";
import "./OrderSummaryItem.css";


const OrderSummaryItem = (props) => {

    return (
        <div className="OrderSummaryItem">
            <img src={props.img} alt="" className="summary_image" />
            <div className="summary_element_wrapper">
                <p className="summary_name">
                    {props.name}
                </p>
            </div>
            <div className="summary_count_wrapper">
                <div className="summary_count">{props.count}</div>
            </div>
        </div>
    );
};

export default OrderSummaryItem;