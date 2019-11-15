import axios from "axios";
// import { API_URL, JPA_API_URL } from '../../Constants'

class TodoDataService {

      retrieveAllTodos(name) {
          //console.log('executed service')
          // return axios.get(`${JPA_API_URL}/users/${name}/todos`);
          // return axios.get(`http://localhost:8081/users/${name}/todos`);
          return axios.get(`http://18.191.192.115:8081/users/${name}/todos`);

      }

      retrieveTodo(name, id) {
          //console.log('executed service')
          // return axios.get(`http://localhost:8081/users/${name}/todos/${id}`);
          return axios.get(`http://18.191.192.115:8081/users/${name}/todos/${id}`);
      }

      deleteTodo(name, id) {
          //console.log('executed service')
          // return axios.delete(`http://localhost:8081/users/${name}/todos/${id}`);
          return axios.delete(`http://18.191.192.115:8081/users/${name}/todos/${id}`);

          // return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
      }

      updateTodo(name, id, todo) {
          //console.log('executed service')
          // return axios.put(`http://localhost:8081/users/${name}/todos/${id}`, todo);
          return axios.put(`http://18.191.192.115:8081/users/${name}/todos/${id}`, todo);

      }

      createTodo(name, todo) {
          //console.log('executed service')
          // return axios.post(`http://localhost:8081/users/${name}/todos/`);
          return axios.post(`http://18.191.192.115:8081/users/${name}/todos/`);
      }

}

export default new TodoDataService()
