import axios from "axios";

class HelloWorldService {
  executeHelloWorldService(){
    return axios.get('http://localhost:8081/hello-mom')
  }
  executeHelloWorldBeanService(){
    return axios.get('http://localhost:8081/hello-mom-bean')
  }
  executeHelloWorldPathVariableService(name){
    return axios.get(`http://localhost:8081/hello-mom/path-variable/${name}`)
  }
}

export default new HelloWorldService();
