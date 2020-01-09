import React, { Component } from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
		<p style={{color: 'red', textAlign: "center"}}>Created By :- Abhishek Raj Ravi</p>
        <ImageList images={this.state.images} />
		<p style={{color: 'red', textAlign: "center"}}>{new Date().toString().split(' ').splice(1,3).join(' ')}</p>
      </div>
    );
  }
}

export default App;
