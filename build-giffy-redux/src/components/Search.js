import React from 'react' ;

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: " "
        };
    }



    handleChange = event => {
        const title = event.target.value;
        this.setState({ title : title});
    }

    handleSubmit = event => {
        const { getUrls } = this.props;
        event.preventDefault();
        getUrls(this.state.title);
        this.setState({title: ""});

    }

    render() {
        const { buttonText} = this.props;
        return(
            <div className="search-bar">
                <h1>React-Redux Giphy App</h1>
                <form action="" 
                    onSubmit = {this.handleSubmit}
                >
                    <input type="text" value={this.state.title} onChange ={this.handleChange}/>
                    <input type="submit" value={buttonText}/>
                </form>
            </div>
        )
    }
}

export default Search