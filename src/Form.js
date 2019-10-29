import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            globalTitle: '',
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        console.log('Rendered Form');
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitForm(e) {
        e.preventDefault();

        this.setState(
            (state) => {
                return {
                    ...state,
                    globalTitle: "My form-"
                }
            },
            () => {
                document.title = this.state.globalTitle
            }
        )
    }

    componentDidUpdate() {
        console.log('Title changed')
    }



    render() {
        return (
            <div className="Form">
                <h1>Your Form</h1>

                <form onSubmit={this.submitForm}>
                    <div className="form-data">
                        <label htmlFor="url">Write here</label>
                        <textarea
                            type="text"
                            id="textarea"
                            name="title"
                            onChange={this.onChange}
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

