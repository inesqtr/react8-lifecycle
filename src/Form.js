import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            globalTitle: 'Global Title',
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {

    }

    submitForm(e) {
        e.preventDefault();

        this.setState({
            globalTitle: 'My Form'
        })

    }

   

    render() {
        return (
            <div className="Form">
                <h1 onSubmit={this.submitForm}> {this.state.globalTitle}</h1>

                <form className="container" onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label htmlFor="url">title</label>
                        <textarea
                            type="text"
                            id="comment"
                            name="comment"
                            value={this.state.comment}
                            onChange={this.onChange}
                            rows={10}
                            placeholder={"Describe your past experience and skills"}
                            required
                        />
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                </form>
            </div>
        );

    }
}

export default Form;

