import axios from "axios";

class MovieService {
  constructor() {
    this.resourceUrl = "https://bazon.cc/api/search";
    this.token = "4d76c2a99eb3964a8eeaccaebcb0db35";
  }

  async fetchFilms(title) {
    let response;
    if (title.length == 0) return [];

    try {
      response = await axios.get(
        this.resourceUrl + "?token=" + this.token + "&title=" + title
      );
    } catch (error) {
      console.log("MovieService.fetchFilms error: " + JSON.stringify(error));
    }
    return response.data.results;
  }

  async fetchFilmByKp(kp) {
    let response;
    console.log(this.resourceUrl + "?token=" + this.token + "&kp=" + kp);
    try {
      response = await axios.get(
        this.resourceUrl + "?token=" + this.token + "&kp=" + kp
      );
    } catch (error) {
      console.log("MovieService.fetchFilms error: " + JSON.stringify(error));
    }
    return response.data.results && response.data.results.length
      ? response.data.results[0]
      : null;
  }
}

export default new MovieService();
