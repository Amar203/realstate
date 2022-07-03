import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '4befa4de2amsh0b6253c718f7b36p108b14jsneb6c48955c60'

      //'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY ,
    },
  });
    
  return data;
}