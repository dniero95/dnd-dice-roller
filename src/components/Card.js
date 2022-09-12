import React from "react";

class Card extends React.Component {
    throw = (state) => {
        const min = 1;
        const max = 100;
        const newToHit = state.toHit = min + Math.random() * (max - min);;
        const newDamage = state.damage = min + Math.random() * (max - min);;
        this.setState({
            'toHit': newToHit,
            'damage': newDamage
        });
    }

    state = {
        'toHit': 0,
        'damage': 0
    }

    render() {
        return (
            <div className="card">
                <h5 className="card-header">Nome personaggio</h5>
                <div className="card-body">
                    <button className="btn btn-danger" onClick={this.throw}>Punch!</button>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Advantage
                        </label>
                    </div>
                    <ul class="list-group list-group-flush">
                        <hr />
                        <li class="list-group-item">To hit: {this.state.toHit}</li>
                        <li class="list-group-item">Damage: {this.state.damage}</li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Card;