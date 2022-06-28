"use strict";

/** PART 1 */


const BASE_NUM_API_URL = "http://numbersapi.com/";
const factArea = $("#fact-area");



/////////////////////////////////////// 1.

/** Make a request using our favorite number. */

async function favNumFact() {

  const favNum = 14;

  axios({
    baseURL: BASE_NUM_API_URL,
    url: `${favNum}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}


/////////////////////////////////////// 2.

/** Request fact for multiple numbers. Add each number (stylishly) to page. */

async function favNumsFacts() {

  const favNums = [1, 2, 3, 4];
  const favNumsParam = favNums.join(",");

  const response = await axios({
    baseURL: BASE_NUM_API_URL,
    url: `${favNumsParam}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = response.data;

  const numsFacts = createFactsArray(data, favNums);
  addFactsToPage(numsFacts);
}

// CALL 2.
// favNumsFacts();


/////////////////////////////////////// 3.

/** Request multiple facts using the same number. Add each fact (stylishly)
 *  to page.
 */

async function favNumMultFacts() {

  let promises = [];
  const factAmount = 4;
  const favNum = 14;

  for (let i = 0; i < factAmount; i++) {

    let p = axios({
      baseURL: BASE_NUM_API_URL,
      url: `${favNum}`,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    promises.push(p);
  }

  let results = await Promise.all(promises);

  let facts = results.map(response => response = response.data);

  addFactsToPage(facts);
}

// CALL 3.
favNumMultFacts();


/////////////////////////////////// HELPER

/** Add all facts to page. */

function addFactsToPage(facts) {

  for (let fact of facts) {
    factArea.append(fact);
  }
}

/** Takes reponse data and array of numbers, returns the resulting facts
 *  as list of strings.
*/

function createFactsArray(obj, values) {

  const facts = [];

  for (let num of values) {
    facts.push(obj[num]);
  }

  return facts;
}