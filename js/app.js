//
const bannerImage = document.getElementById("art");
const freeButton = document.getElementById("free");
const expressButton = document.getElementById("express");
const firstImage = document.getElementById("first");
const secondImage = document.getElementById("second");
const thirdImage = document.getElementById("third");
const fourthImage = document.getElementById("fourth");
const description = document.getElementById("description");
const price = document.getElementById("price");
const shippingCost = document.getElementById("shipping");
const free = document.getElementById("free");
const express = document.getElementById("express");

// update ui when we click for first image

firstImage.addEventListener("click", () => {
  if (!isSelected(firstImage)) {
    firstImage.classList.add("selected");
    secondImage.classList.remove("selected");
    thirdImage.classList.remove("selected");
    fourthImage.classList.remove("selected");
  }
  bannerImage.src = "../images/1.jpg";
  description.innerHTML =
    " <span class='text-2xl font-bold'> First Product </span> - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?";
  price.innerText = 650;
  grandTotal();
});

// update ui when we click for second image

secondImage.addEventListener("click", () => {
  if (!isSelected(secondImage)) {
    firstImage.classList.remove("selected");
    secondImage.classList.add("selected");
    thirdImage.classList.remove("selected");
    fourthImage.classList.remove("selected");
  }
  bannerImage.src = "../images/2.jpg";
  description.innerHTML =
    "<span class='text-2xl font-bold'> Second Product </span>  - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?";
  price.innerText = 550;
  grandTotal();
});

// update ui when we click for third image

thirdImage.addEventListener("click", () => {
  if (!isSelected(thirdImage)) {
    firstImage.classList.remove("selected");
    secondImage.classList.remove("selected");
    thirdImage.classList.add("selected");
    fourthImage.classList.remove("selected");
  }
  bannerImage.src = "../images/3.jpg";
  description.innerHTML =
    "<span class='text-2xl font-bold'> Third Product </span>  - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?";
  price.innerText = 450;
  grandTotal();
});

// update ui when we click for fourth image

fourthImage.addEventListener("click", () => {
  if (!isSelected(fourthImage)) {
    firstImage.classList.remove("selected");
    secondImage.classList.remove("selected");
    thirdImage.classList.remove("selected");
    fourthImage.classList.add("selected");
  }
  bannerImage.src = "../images/4.jpg";
  description.innerHTML =
    "<span class='text-2xl font-bold'> Fourth Product </span>  - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus. Voluptatibus minima aut non doloremque?";
  price.innerText = 350;
  grandTotal();
});

//add event listener in shipping charge buttons

free.addEventListener("click", () => {
  if (!isSelected(free)) {
    free.classList.add("selected");
    express.classList.remove("selected");
  }
  shippingCost.innerText = 5;
  grandTotal();
});

express.addEventListener("click", () => {
  if (!isSelected(express)) {
    free.classList.remove("selected");
    express.classList.add("selected");
  }
  shippingCost.innerText = 30;
  grandTotal();
});

// grand total function

const grandTotal = () => {
  const picturePrice = Number(price.innerText);
  const pictureShippingCost = Number(shippingCost.innerText);
  document.getElementById("total").innerText =
    picturePrice + pictureShippingCost;
};

const isSelected = (element) => {
  return element.classList.contains("selected");
};
