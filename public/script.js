let array = []
async function buttonClick(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    if(response.status == 200)
    {
        array = response.data
        console.log(array)
        populateData(response.data)
    }
    else{
        console.log("Data not fetched correctly");
    }
}

function populateData(data){
    const container = document.getElementById('card-container');
    container.innerHTML = '';
    data.map(item => {
      const card = createCard(item);
      container.appendChild(card);
    });
}

function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div>Id: ${item.id}</div>
      <h2>Title : ${item.title}</h2>
      <p>Body: ${item.body}</p>
    `;
    return card;
  }

async function searchButtonClick(){
    let id = document.getElementById("inputSearch").value;
    if(id > 0 && id <= 100){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if(response.status == 200)
        {
            array = response.data
            console.log(array)
            const container = document.getElementById('card-container');
            container.innerHTML = '';
            const card = createCard(response.data)
            container.appendChild(card);
        }
        else{
            console.log("Data not fetched correctly");
        }
    }
    else{
        alert("id can be 1 to 100");
    }
}
