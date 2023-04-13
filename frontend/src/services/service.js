import http from "../http-common.js";

class DataService {
  getAllSkills() {
    return http.get("/skills", { withCredentials: true });
  }
  getSkillById(id) {
    return http.get(`/skills/${id}`, { withCredentials: true });
  }
  getSkillsByName(name) {
    return http.get(`/skills/name/${name}`, { withCredentials: true });
  }
  logIn(hash, password) {
    return http.post("/login", { hash, password }, { withCredentials: true });
  }
  authenticate() {
    return http.get("/auth", { withCredentials: true });
  }
  authenticateAdmin() {
    return http.get("/authadm", { withCredentials: true });
  }
  logOut() {
    return http.get("/logout", { withCredentials: true });
  }
  getSoftSkills() {
    return http.get("/softskills", { withCredentials: true });
  }
  getSoftSkillById(id) {
    return http.get(`/softskills/${id}`, { withCredentials: true });
  }
  getCategories() {
    return http.get("/categories", { withCredentials: true });
  }
  getSkillsByCategory(category) {
    return http.get(`/categories/${category}`, { withCredentials: true });
  }
}

const service = new DataService();

export default service;
