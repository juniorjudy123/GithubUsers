
const url = "https://api.github.com/users";

const btn = document.getElementById("btn");
const container = document.getElementById("container");

var gitUserList = []

const fetchData = async () => {
    let input = document.getElementById("input-text");
    let inputValue = input.value;

    const response = await fetch(url);
    const result = await response.json();

    result.filter((ele) => {
        if (inputValue === "") {// if input is empty string then return all elements
            return ele;
        } else {
            return ele.login === inputValue;
        }

    })