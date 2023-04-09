import axios from "axios";

const getData = async (dataURL:string) => {
  try{
    const response = await axios.get(dataURL);
    // console.log('함수 내부'+response.data);
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export default getData;


