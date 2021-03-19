import React from 'react';
import './form.style.css';

const From = (props) => {

    return(
        <div className="container from-group">
            <form onSubmit={props.cityFrom}>
                <div className="row form_bloc mt-4">
                    <input type="text" name="city" className="form-control col-md-3 col-xs-12 mt-3" autoComplete="off"/>
                    <input type="text" name="country" className="form-control col-md-3 col-xs-12 mt-3" autoComplete="off"/>
                    <button className="btn btn-warning col-md-3 col-xs-12 mt-3">Get Weather</button>
                </div>
            </form>
        </div>
    );
}


export default From;