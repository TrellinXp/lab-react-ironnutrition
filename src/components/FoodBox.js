import React, { Component } from 'react'

export default class FoodBox extends Component {

    renderFood() {
        return this.props.listOfFoods.map(movieObj => {
            return (
                <article className="media">
                <div className="media-left">
                <figure className="image is-64x64">
                    <img alt="img" src={movieObj.image} />
                </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{movieObj.name}</strong> <br />
                            <small>{movieObj.calories}</small>
                        </p>
                    </div>
                </div>
                </article>

            )
        })
    }

    render() {
        return (
            <div className="box">
                    <section className="food-container">

                        {
                            this.props.listOfFoods.length
                                ? this.renderFood()
                                : <p className="msg-info">There are currently no Food to display</p>
                        }
                    </section>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value="1" />
                            </div>
                            <div className="control">
                                <button className="button is-info">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
