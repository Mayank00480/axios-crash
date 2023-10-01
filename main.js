
// GET REQUEST
function getTodos() {
/*console.log('GET Request');
    axios({
        method : 'GET',
        url : 'https://jsonplaceholder.typicode.com/todos',
        params : {
            '_limit' : 5
        } 
    })
    .then((res) => showOutput(res))
    .catch(err => console.log(err))*/
    axios.get('https://jsonplaceholder.typicode.com/todos',{params : {
        '_limit' : 5
    }})
    .then(t => showOutput(t));
  }
  
  // POST REQUEST
  function addTodo() {
    /*axios({
        method : 'POST',
        url : 'https://jsonplaceholder.typicode.com/todos',
        data : {
            title : 'updated',
            completed : true,
        } 
    })
    .then((res) => showOutput(res))*/
    axios.post('https://jsonplaceholder.typicode.com/todos', {
        title : 'solid',
        completed : true
    })
    .then(t => showOutput(t));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
   /* axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title : 'newTODOs'
    })
    .then((t) => showOutput(t))
    .catch(err => console.log(err) )*/
    axios.patch('https://jsonplaceholder.typicode.com/todos/2',{
        title : 'newTODOs'
    })
    .then(t => showOutput(t))
  }
  
  // DELETE REQUEST
  function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/2')
  .then((t) => {showOutput(t)
    console.log(t)})
    .catch(err = console.log(err));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
 axios.all([axios.get('https://jsonplaceholder.typicode.com/posts'),axios.get('https://jsonplaceholder.typicode.com/todos')])
 .then(axios.spread((posts,todos) =>{
    showOutput(todos);
    console.log(posts);
 }))
 
  }
  
  // CUSTOM HEADERS    https://jsonplaceholder.typicode.com/todos
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
