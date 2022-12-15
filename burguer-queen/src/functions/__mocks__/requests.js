const resJson = {
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY2OTg1MzMzNSwiZXhwIjoxNjY5ODU2OTM1LCJzdWIiOiIyIn0.dTllOT6Hgeji3huoGIMVw3NIWA3ZpwaSYsvYJqVy1dM",
  user: {
    email: 'grace.hopper@systers.xyz',
    role: 'admin',
    id: 2
  }
}

export const postLogin = jest.fn();
export const setToken_role= jest.fn();
export const  setCurrenId= jest.fn();




/// mock de navigate


// export const postLogin = () => {
//   return Promise.resolve(({
//     json: () => {
//       return Promise.resolve({ accessToken: '123', user: { role: 'admin' }})
//       setToken_role()
//       setCurrenId()
//       act(() => {
//         navigate()
//       })
    
//     }
//   }))
// }

// ;


;



// export const getUsers = (tokenLogin/* , email, password */) => {}

// export const getProducts = (tokenLogin) => {}

// export const createProducts= (tokenLogin , id, name, type, price, url) => {}


// export const createUsers = (tokenLogin , email, password, role, id) => {}

// export const deleteItem = (id, tokenLogin, path) =>{}

// export const editItem =(id, tokenLogin, email, password, role)=>{}

// export const editProduct =(id, tokenLogin, name, type, price, url)=>{}

