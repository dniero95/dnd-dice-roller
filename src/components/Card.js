import React from "react";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h5 className="card-header">Nome personaggio</h5>
                <div className="card-body">
                    <button className="btn btn-danger">Punch!</button>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Advantage
                        </label>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"></li>
                        <li class="list-group-item">To hit: </li>
                        <li class="list-group-item">Damage: </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Card;