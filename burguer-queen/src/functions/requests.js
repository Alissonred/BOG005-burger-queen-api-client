export const postLogin = (email, password) => {
  console.log('postLogin original');
  return fetch('http://localhost:8080/login', {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    email: email,
    password: password,
  })
})}

export const getUsers = (tokenLogin/* , email, password */) => fetch('http://localhost:8080/users', {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "authorization": "Bearer " + tokenLogin
  },
})

export const getProducts = (tokenLogin) => fetch('http://localhost:8080/products', {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "authorization": "Bearer " + tokenLogin
  },
})

export const createProducts= (tokenLogin , id, name, type, price, url) => fetch('http://localhost:8080/products', {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "authorization": "Bearer " + tokenLogin
  },
  body: JSON.stringify({
    id: id,
    name: name,
    price: price,
    image:url,
    type:type,
   
  })
})

export const setToken_role =(token, role)=>{
  localStorage.setItem('token',token); //sube datos a localstorage para acceder 
  localStorage.setItem('role', role);
}
export const setCurrenId =(id)=>{
  localStorage.setItem('id', id); 
}

export const getToken =()=>localStorage.getItem('token');
export const getRole =()=>localStorage.getItem('role');
export const getIdCurrent =()=>localStorage.getItem('id');

export const createUsers = (tokenLogin , email, password, role, id) => fetch('http://localhost:8080/users', {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "authorization": "Bearer " + tokenLogin
  },
  body: JSON.stringify({
    email: email,
    password: password,
    role: role,
    id:id
  })
})

export const deleteItem = (id, tokenLogin, path) =>{
  return fetch(`http://localhost:8080/${path}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      "authorization": "Bearer " + tokenLogin
    },
  })
}

export const editItem =(id, tokenLogin, email, password, role)=>{  
  return fetch(`http://localhost:8080/users/${id}` ,{
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "authorization": "Bearer " + tokenLogin
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
      id:id
    })
  })
} 

export const editProduct =(id, tokenLogin, name, type, price, url)=>{
   
  return fetch(`http://localhost:8080/products/${id}` ,{
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "authorization": "Bearer " + tokenLogin
    },
    body: JSON.stringify({
      id: id,
      name: name,
      price: price,
      image:url,
      type:type
     
    })
  })
} 

export const createOrder =(tokenLogin, name, statusOrder, productsList, total, date )=>{
  return fetch('http://localhost:8080/orders',{
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "authorization": "Bearer " + tokenLogin
    },
    body: JSON.stringify({
      client: name,
      products:productsList,
      status: statusOrder,
      dataEntry: date,
      total : total
    })

})
}




export const getOrders = (tokenLogin) => fetch('http://localhost:8080/orders', {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    "authorization": "Bearer " + tokenLogin
  },
})

export const editOrder =(id, tokenLogin, status)=>{
   
  return fetch(`http://localhost:8080/orders/${id}` ,{
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      "authorization": "Bearer " + tokenLogin
    },
    body: JSON.stringify({
      status: status
    })
  })
} 

