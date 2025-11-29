const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

const priceElements = document.querySelectorAll(".price");

let total = 0;
priceElements.forEach((priceElement)=>{
	const price = parseFloat(priceElements.textContent)
	total = total + price;
})

const table = document.querySelector("table");
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

totalCell.textContent = `Total Price: ${total}`;
	totalRow.appendChild(totalCell);
	table.appendChild(totalRow); 
};

getSumBtn.addEventListener("click", getSum);

