import React from 'react';

class Map extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      htmlContent: '', // Store the HTML content here
    };
}

componentDidMount() {
    // Fetch the HTML content from the external file
    fetch('map.html')
        .then((response) => response.text())
        .then((html) => {
        this.setState({ htmlContent: html });
    });
}

render() {
    return (
        <div>
        {/* Use dangerouslySetInnerHTML to render the HTML content */}
        <div dangerouslySetInnerHTML={{ __html: this.state.htmlContent }} />
        </div>
    );
    }
}

export default Map;