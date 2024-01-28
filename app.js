const contents = document.querySelector('.contents');
const input = document.getElementById('input');

const getData = async () => {
    const url = 'https://restcountries.com/v2/all';
    const response = await fetch(url);
    const data = await response.json();

    data.forEach(item => {
        // called function to crate div element
        createData(item);
    })
}

//create element to display data
const createData = (data) => {
    const div = document.createElement('div');
    div.classList.add('box-content');
    const contentHTML = `
            <div class="img-container">
                <img src="${data.flag}" alt="none" class="image-flag" />
            </div>
            <div class="info">
                <h3 class="country">${data.name}</h3>
                <p class="population">${data.population.toLocaleString()}</p>
            </div>
    `
    div.innerHTML = contentHTML;
    contents.appendChild(div);

}
// search Function
const search = () => {
    const filterValue = input.value.toLowerCase();
    const contentBox = document.querySelectorAll('.box-content');
    contentBox.forEach(item =>{
        let txtValue = item.textContent || item.innerText;
            if(txtValue.toLowerCase().indexOf(filterValue) > -1){
                item.style.display = "";
            }else {
                item.style.display = "none";
            }
    })
}


getData()

