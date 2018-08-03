# README

# Uisge



Uisge, inspired by Untappd, is a social media application that allows users to publicly share their experiences, ratings, and thoughts about Scotch-whiskey known in Scottish Gaelic as uisge-beatha which translates to water of life.

[LIVE](http://uisge.herokuapp.com)



### Technologies Used
 Uisge is built using a Ruby on Rails Backend, using RESTful conventions and an MVC architecture. Pictures and gifs are stored using Amazon web services. On the front end communication is achieved using AJAX calls to the server. The app is rendered in React with the aid of Redux as a single source of truth achieved by using the Redux store. HTML and CSS provide the structure and appearance of the web app.

 ![](https://i.imgur.com/uBGeEJY.png)


### Features
  Among my favorite features were the main index and Post show page. This is because these are the two aspects of the app that required getting all the information from many different tables into a single page.

  ![postShow](https://i.imgur.com/dhSUhaB.png)

Another of my favorite features although perhaps not as technically impressive, was a lot of fun to implement. The personal profile picture and background mural are a combination of AWS services and CSS work to create a beautiful look to the user profile.

 ```js
 handleSubmit(e) {
   e.preventDefault();
   const formData = new FormData();
   formData.append('post[body]', this.state.body);
   formData.append('post[rating]', this.state.rating);
   formData.append('post[drink_id]', this.state.drink_id)
   if (this.state.photoFile) {
     formData.append('post[photo]', this.state.photoFile);
   }
   this.props.action(formData, this.state.id).then(() => this.props.history.push('/posts'));
 }

 handleFile(e) {
   const file = e.currentTarget.files[0];
   const fileReader = new FileReader();
   fileReader.onloadend = () => {

     this.setState({photoFile: file, photoUrl: fileReader.result});
   };
   if (file) {
     fileReader.readAsDataURL(file);
   }
 }
```

  ![img](https://i.imgur.com/A8oghL0.png)


A feature that I also really enjoyed implementing is the front end search for different drinks. Since the only way to post is by checking a drink out from the drink list, I needed a way to easily access the available drinks. If the drink is unavailable on the list it needs to be allow for a new post. If the add drink button however is in plain site a lazy user could simply add a drink if they do not immediately see it.

Using a dynamic front end search. making sure that all the drinks are visible but can still easily be found and will only show the add drink button if the search does not match any drink.

This of course is doubly protectes with both model and database level validations for drink names.

  ```js
     matches() {
      const matches = [];
      if (this.state.inputVal.length === 0) {
        return this.props.drinks;
      }

      this.props.drinks.forEach(drink => {
        let sub = drink.bottle_name.slice(0, this.state.inputVal.length);
        if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
          matches.push(drink);
        }
      });

      if (matches.length === 0) {
        matches.push('No matches');
      }

      return matches;
    }

    selectDrink(event) {
      let drink = event.currentTarget.innerText;
      this.setState({inputVal: drink});
    }

    render() {
      let drink = this.matches().map((drink, i) => {
        if (drink === 'No matches') {
          return <li key="4015564" className="create-drink">
                  <Link className="drink-item" to={'/drinkadd'}>
                    Add New Drink
                  </Link>
                  </li>
                  ```
`
![img](https://i.imgur.com/oaD05XQ.png)    

![img](https://i.imgur.com/VyQWko3.png)


### Future features
The immediate next features that I will be adding include comments, likes, and friendships. for more information visit my [portfolio](http://saulack.github.io)
