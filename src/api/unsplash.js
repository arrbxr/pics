import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5316f8fc36191f6a1e532a69644fa4fff81386f654af8b6e08082c2d8e31d233"
  }
});
