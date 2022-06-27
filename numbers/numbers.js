"use strict";

/** PART 1 */

// 1.
const BASE_NUM_API_URL = "http://numbersapi.com/";
const favNum = 14;
const factArea = $("#fact-area");

axios({
  baseURL: BASE_NUM_API_URL,
  url: `${favNum}`,
  headers: {
    'Content-Type': 'application/json'
  }
})


// 2.

// ask user for fav numbers, place in list.
const favNums = [1, 2, 3, 4];
const favNumsParam = favNums.join(",");

axios({
  baseURL: BASE_NUM_API_URL,
  url: `${favNumsParam}`,
  headers: {
    'Content-Type': 'application/json'
  }
})

function addFactsToPage() {

  // get facts and append to factArea

}