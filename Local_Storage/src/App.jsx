

const App = () => {

  localStorage.clear();

  localStorage.setItem('user', 'Ranjay');

  const user = localStorage.getItem('user')

  localStorage.setItem('age','23');
  const Age = localStorage.getItem('age')
  console.log(Age);
  console.log(user);

  console.log(Age,user);

  localStorage.removeItem('age');


  const userData = {
    username:'Dhanush',
    age: 23,
    city:'Delhi'
  }

  console.log('userData','userData');

  localStorage.setItem('userData',JSON.stringify(userData));

  const usera = JSON.parse(localStorage.getItem('userData'));
  console.log(usera)
  console.log(typeof user1)
  return (
    <div>
      Hello All is well
    </div>
  )
}

export default App
