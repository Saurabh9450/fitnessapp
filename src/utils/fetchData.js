export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '086bf73323msh01370119927e38ap114fc6jsne466529b2b1f',
    },
  };

  //086bf73323msh01370119927e38ap114fc6jsne466529b2b1f
  //44f71bcf77msh18fd60caaa7ac48p11e413jsnf8fff6867ada

export const fetchData = async(url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;

}