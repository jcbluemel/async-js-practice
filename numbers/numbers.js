"use strict";

/** PART 1 */

// 1.
const BASE_NUM_API_URL = "http://numbersapi.com/";
const factArea = $("#fact-area");

async function favNumFact(){

  const favNum = 14;
  
  axios({
    baseURL: BASE_NUM_API_URL,
    url: `${favNum}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}


// 2.

// ask user for fav numbers, place in list.
const favNums = [1, 2, 3, 4];
const favNumsParam = favNums.join(",");

async function favNumsFacts(favNumsParam, favNums){

  const response = await axios({
    baseURL: BASE_NUM_API_URL,
    url: `${favNumsParam}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = response.data;
  const numsFacts = [];
  for(let num of favNums){
    //data[num] is the fact??
    numsFacts.push(data[num]);
    console.log(data[num].text, 'datanumtext?');
  }
  console.log(numsFacts);
  addFactsToPage(numsFacts);
}

function addFactsToPage(facts) {

  // get facts and append to factArea
  for(let fact of facts){
    factArea.append(fact);
  }
}

favNumsFacts(favNumsParam, favNums);