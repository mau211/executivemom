import axios from "axios";

class HelloWorldService {
  executeHelloWorldService(){
    return axios.get('http://localhost:8081/hello-mom')
  }
  executeHelloWorldBeanService(){
    return axios.get('http://localhost:8081/hello-mom-bean')
  }
}

export default new HelloWorldService();
