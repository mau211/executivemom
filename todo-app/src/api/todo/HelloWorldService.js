import axios from "axios";

class HelloWorldService {
  executeHelloWorldService(){
    return axios.get('http://localhost:8081/hello-mom')
    // return axios.get('http://18.189.189.51:8081/hello-mom')
  }
  executeHelloWorldBeanService(){
    return axios.get('http://localhost:8081/hello-mom-bean')
    // return axios.get('http://18.189.189.51:8081/hello-mom-bean')

  }
  executeHelloWorldPathVariableService(name){
    return axios.get(`http://localhost:8081/hello-mom/path-variable/${name}`)
    // return axios.get(`http://18.189.189.51:8081/hello-mom/path-variable/${name}`)

  }
}

export default new HelloWorldService();
