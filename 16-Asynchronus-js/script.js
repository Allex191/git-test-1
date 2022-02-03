"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//old way

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
  </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText(
    "beforeend",
    `Something went wrong: ${msg}`
  );
};

//1.building a promise with fetch and consume with then *then is a available on all promises
//2.when response from fetch will be settled "then"-
//3.json method will read the response body and returns it as promise that results of parsing the body text as JSON
//4.*then when will be settled we can use JSON text from json() method

const input = document.createElement("input");
input.style.padding = "5px";
input.style.margin = "5px 0";
input.style.fontSize = "16px";
btn.insertAdjacentElement("beforebegin", input);

const renderNeighbor = function (countryObj) {
  const neighbors = countryObj.borders;
  if (!neighbors) throw new Error("Neighbour not found");

  neighbors.forEach((neighbor) => {
    fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
      .then((response) => {
        if (!response.ok) throw new Error("Neighbor not found");
        return response.json();
      })
      .then((countryData) => renderCountry(countryData[0], "neighbour"));
  });
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) throw new Error("Country not found");
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData);
      renderCountry(countryData[0]);
      renderNeighbor(countryData[0]);
    })
    .finally(() => (countriesContainer.style.opacity = 1))
    .catch((err) => {
      console.error("err1", err);
      renderError(err);
    });
};

btn.addEventListener("click", function () {
  countriesContainer.textContent = "";
  getCountryData(input.value);
});
document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;
  countriesContainer.textContent = "";
  getCountryData(input.value);
});

//build and return a promise
const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};
////await async
const whereIam = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: long } = pos.coords;

    let resGeo = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    if (!resGeo.ok) {
      for (let i = 0; i < 10; i++) {
        if (!resGeo.ok) {
          resGeo = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
          if (i === 9) {
            throw new Error("geo");
          }
        }
      }
    }
    const countryName = await resGeo.json();

    const resCountry = await fetch(
      `https://restcountries.com/v3.1/name/${countryName.prov}`
    );
    const countryBody = await resCountry.json();
    renderCountry(countryBody[0]);
    return `you are in ${countryBody[0].capital[0]}`;
  } catch (err) {
    if (err.message === "geo") {
      renderError(`Too many requests try again`);
    }
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

// (async function () {
//   try {
//     const where = await whereIam();
//     const logCity = console.log(where);
//   } catch (err) {
//     console.log(err);
//   }
// })();

//#Promise.all() running all promises in paralel and not in queue *if one promise rejects all is rejecting
// const getCountries = async function (country1, country2, country3) {
//   try {
//     const data = await Promise.all([
//       getJSON(country1),
//       getJSON(country2),
//       getJSON(country3),
//     ]);
//     console.log(data.map((arr) => arr[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// // get3Countries("ro", "ru", "it");

//#Promise.race() is geting the fastest settled *fullfiled or rejected promise
const get3Countries = async function (country1, country2, country3) {
  try {
    const data = await Promise.allSettled([
      getJSON(country1),
      getJSON(country2),
      getJSON(country3),
    ]);
    console.log(data.map((arr) => arr[0].capital));
  } catch (err) {
    console.error(err);
  }
};
// get3Countries("ro", "ru", "it");

const getJSON = async function (url) {
  try {
    const response = await fetch(url);
    const body = await response.json();
    return body[0];
  } catch (err) {
    console.error(err);
  }
};

const timeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

const getFastest = async function () {
  try {
    const settled = await Promise.race([
      getJSON("https://restcountries.com/v3.1/name/portugal"),
      timeout(0.1),
    ]);
    renderCountry(settled);
  } catch (err) {
    console.error(err);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};
// getFastest();

/*



*/
//Create wait images///
const wait = function (seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const images = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imgPath;
    image.addEventListener("load", () => {
      images.insertAdjacentElement("afterbegin", image);
      resolve(image);
    });
    image.addEventListener("error", () => {
      reject(new Error("rejected"));
    });
  });
};

const loadNPause = async function (url1, url2, url3) {
  try {
    const img1 = await createImage(url1);
    await wait(2);
    img1.style.display = "none";
    const img2 = await createImage(url2);
    await wait(2);
    img2.style.display = "none";
    const img3 = await createImage(url3);
    await wait(2);
    img3.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};
// loadNPause("img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg");

const loadAll = async function (...imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgsEl = await Promise.allSettled(imgs);
    imgsEl.forEach((img) => img.value.classList.add("parallel"));
  } catch (err) {}
};
loadAll("img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg");
/* 





*/
// const coords = [47.21707827484123, 28.556120031807215];

// const fetchCountry = function (url) {
//   return fetch(url).then((response) => {
//     if (!response.ok) {
//     whereAmI(coords[0], coords[1]);
//       throw new Error(`Too many request ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const whereAmI = function (lat, long) {
//   fetchCountry(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((data) => getCountryData(data.prov))
//     .catch((e) => (countriesContainer.textContent = e))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// whereAmI(coords[0], coords[1]);

// console.log("Test start 1");
// setTimeout(() => console.log("set Timeout 2"), 0);
// Promise.resolve("Promise 3").then((prom) => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(prom);
// });
// console.log("test finished 4");
////Order of execution////
//1- callStack 1,4
//2- microtasks -promise 3
//3- callback queue 2
//set Timeout will be not be executed after 0 seconds but after the microtask *promise will be loaded and executed  wich can be a long time

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log("Lottery draw is happening");
//   setTimeout(function () {
//     if (Math.random() >= 0.4) {
//       resolve("You win");
//     } else {
//       reject(new Error("you lose"));
//     }
//   }, 1000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// //promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("waited for 1 seconds"));

// //callBack hell
// setTimeout(() => {
//   console.log("1 sec passed");
//   setTimeout(() => {
//     console.log("2 sec has passed");
//     setTimeout(() => {
//       console.log("3 seconds has passed");
//     });
//   });
// });

// //solution for call backHell
// const wait = function (seconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log("one sec has passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("two seconds has passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("three seconds has passed");
//   });

// const image = document.createElement("img");
// image.src = "img/img-1.jpg";
// image.addEventListener("load", () => {
//   images.insertAdjacentElement("afterbegin", image);
// });
