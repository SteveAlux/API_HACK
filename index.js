let navarrow = 0;




function initGroceryBuddy(){
    $('html').on('click','#startGame', function(event){
        console.log('woah');
        let foodform = foodQuery();
        $('main').empty();
        
        $('#shopping_cart_image').detach();
        $('#title_text').text('Plan out your week!')
        $('main').html(foodform);
        $('main').css({'height':'auto'});
        $('header').append('<i class="fas fa-arrow-left" id=arrowback ></i>');
        navarrow = 1;
    });
}
function submitClick(){
    $('html').submit('#js-form',function(event){
      console.log('SUBMIT');
        
        event.preventDefault();
        checkParams();
        // let params = [];
        // let categorieSearch = checkParams();
        // let DataObject = runSubmit();
        $('#title_text').text('Your Results');
        $('main').empty();
        $('body').css({'height':'100%'});
        $('main').css({ 'display':'flex','flex-direction':'column','height':'100%','justify-content': 'space-evenly'});
        let results = renderResults();
        $('main').html(results);
        navarrow=2;
        

    });
}

function boxClick(){
  // Grocery List pop up display
    $('html').on('click','#top_box', function(event){
        $('#title_text').text('Grocery List');
        let results = renderGroceryList();
        $('footer').detach();

       
       $('body').css({'height':'auto'});
        $('main').empty();
        $('main').html(results);
        $('body').append('<footer></footer>');
        $('footer').css({'position':'relative'});

        navarrow=3;
    });
    // recipes pop up display
      $('html').on('click','#bottom_box',function(event){
        $('#title_text').text('Recipe Ideas');
        let results2 = renderRecipeList();
        $('footer').detach();
        $('body').css({'height':'auto'});
        $('main').empty();
        $('main').html(results2);
        $('body').append('<footer></footer>');
        $('footer').css({'position': 'absolute','bottom':'0'});
       
        navarrow=3;
    });
    //MODAL OPENING CODE--------------------------------------------
    $('html').on('click','#recipe_list #myBtn',function(event){
      $('html').find('#myModal').css({'display':'block'});
      let modal_content = getModalContent();
      $('html').find('.modal-content').html(modal_content);
    });

    $('html').on('click','#nutrition_link', function(event){
        $('html').find('#myModal2').css({'display':'block'});
        $('html').find('.modal').css({'display':'none'});
      let modal_content2 = getModalContent2();
      $('html').find('.modal-content2').html(modal_content2);
    });
    $('html').on('click','#recipe_info', function(event){
        $('html').find('#myModal').css({'display':'block'});
        $('html').find('.modal2').css({'display':'none'});
        let modal_content = getModalContent();
      $('html').find('.modal-content').html(modal_content);
    });
}


function getModalContent2(){
    return `<span class="close2">&times;</span>
    <h2>Nutrition Facts</h6>
    <img src='' alt='graph of nutrients '>
    <p>Infomation on what nutrients and other health related facts lorem psum dolor sit amet consectetur adipisicing elit. Eligendi enim voluptate, distinctio quo voluptatibus </p>
    <h3>Nutrients List etc</h6>
    <p id='recipe_info' class='link'>Back to recipe</p>
    
    `;
}

function getModalContent(){
  return `
  <span class="close">&times;</span>
  <h2>Name of Recipe</h6>
  <img src='' alt='photo of recipe'>
  <p>Directions on how you will be preparing this food lorem psum dolor sit amet consectetur adipisicing elit. Eligendi enim voluptate, distinctio quo voluptatibus </p>
  <h3>Ingridients</h6>
  <ul>
    <li>ingridient</li>
    <li>ingridient</li>
    <li>ingridient</li>
    <li>ingridient</li>
    <li>ingridient</li>
  </ul>
  <p>Cost of Meal: _______</p>
  <p id='nutrition_link' class='link'>Nutrition Facts </p>
  `
}

function recipeClick(){
  // Get the modal
var modal = document.getElementById("myModal");
var modal2= document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName('close2')[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
$('html').on('click','.close', function(event) {
  $('html').find('.modal').css({'display':'none'});
});
$('html').on('click','.close2', function(event) {
    $('html').find('.modal2').css({'display':'none'});
  });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if (event.target == modal2){
      modal2.style.display= 'none';
  }
}

}


function renderGroceryList(){
    return `
    <div id='grocery_list'>
      <h5>List for this week</h5>
      <ul>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
        <li>Food</li>
      
      </ul>
    </div>
    
    
    `;
}
function renderRecipeList(){
  return `<div id='recipe_list'>
  <h5>Recipes and their directions</h5>
  <ul>
  <li id="myBtn">Recipe</li>
  <li id="myBtn">Recipe</li>
  <li id="myBtn">Recipe</li>
  <li id="myBtn">Recipe</li>
  <li id="myBtn">Recipe</li>
  
  
  </ul>
</div>
  
  
  `

}


function renderResults(){
    return  ` 
    <div class='results_box' id='top_box' >
        <h5>Grocery List</h5>
        <i class="fas fa-shopping-cart" id='pics'></i>
    </div>
    <div class='results_box' id='bottom_box'>
        <h5> Recipes</h5>
        <i class="fas fa-utensils" id='pics'></i>
    </div>`;
}

function foodQuery(){
    return `
    
    <form id='js-form'>
    
    <h4 id='top_category_title'>Meal Time</h4>
    <div class= 'form-row'>

    <label for= 'Breakfast' class='container'>Breakfast
    <input type= 'checkbox' id='Breakfast' name='Breakfast' value="Breakfast">
    <span class="checkmark"></span>
    </label>

    <label for= 'Lunch' class='container'>Lunch
    <input type= 'checkbox' id='Lunch' name='Lunch' value="Lunch">
    <span class="checkmark"></span>
    </label>

    <label for= 'Dinner' class='container'>Dinner
    <input type= 'checkbox' id='Dinner' name='Dinner' value="Dinner">
    <span class="checkmark"></span>
    </label>

    <label for= 'allday' class='container'>All Day
    <input type= 'checkbox' id='allday' name='allday' value="allday">
    <span class="checkmark"></span>
    </label>
  </div>

    <h4>Categories</h4>
  <div class= 'form-row'>
    <label for= 'vegetarian' class='container'>Vegetarian
    <input type= 'checkbox' id='vegetarian' name='vegetarian' value="vegetarian">
    <span class="checkmark"></span>
    </label>

    <label for= 'vegan' class='container'>Vegan
    <input type= 'checkbox' id='vegan' name='vegan' value="vegan">
    <span class="checkmark"></span>
    </label>

    <label for= 'glutenFree' class='container'>Gluten Free
    <input type= 'checkbox' id='glutenFree' name='glutenFree' value="glutenFree">
    <span class="checkmark"></span>
    </label>

    <label for= 'Ketogenic' class='container'>Ketogenic
    <input type= 'checkbox' id='Ketogenic' name='Ketogenic' value="ketogenic">
    <span class="checkmark"></span>
    </label>

    <label for= 'ovo-vegetarian' class='container'>Ovo-Vegetarian
    <input type= 'checkbox' id='ovo-vegetarian' name='veryHealthy' value="ovo-vegetarian">
    <span class="checkmark"></span>
    </label>

    <label for= 'paleo' class='container'>Paleo
    <input type= 'checkbox' id='paleo' name='paleo' value="paleo">
    <span class="checkmark"></span>
    </label>
  </div>

  

<button type="submit" id='cat_button' >Submit</button>
</form>
  
  
    `;
}


function navarrowClick(){
    $('html').on('click','#arrowback',function(event){
        $('header').empty();
        $('main').empty();
        $('main').detach();
        $('#js-form').detach();
        if (navarrow === 1){
            $('header').append(`
        
            <h2 id='title_text'>Grocery Buddy</h2>
         `);
         
            $('body').append(`<div id='shopping_cart_image'>
            <button type="button" id='startGame'>Start</button>
          </div>
          <main>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi enim voluptate, distinctio quo voluptatibus.</p>
          <div id='selector_buttons'>
          <i class="fas fa-circle" id="1circle"></i>
          <i class="fas fa-circle unchecked" id="circle"></i>
          <i class="fas fa-circle unchecked" id="circle"></i>
          </div>
          </main>
        `);
      
            
           
            navarrow=0;
            
        }
        else if (navarrow === 2){
            $('header').empty();
            $('main').empty();
            $('main').detach();
            $('header').append(`
            <i class="fas fa-arrow-left" id=arrowback ></i>
            <h2 id='title_text'>Plan out your week!</h2>
         `);
         
            $('body').append(`<main><form id='js-form'>
    
            <h4 id='top_category_title'>Meal Time</h4>
            <div class= 'form-row'>
    
            <label for= 'Breakfast' class='container'>Breakfast
            <input type= 'checkbox' id='Breakfast' name='Breakfast' value="Breakfast">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'Lunch' class='container'>Lunch
            <input type= 'checkbox' id='Lunch' name='Lunch' value="Lunch">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'Dinner' class='container'>Dinner
            <input type= 'checkbox' id='Dinner' name='Dinner' value="Dinner">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'allday' class='container'>All Day
            <input type= 'checkbox' id='allday' name='allday' value="allday">
            <span class="checkmark"></span>
            </label>
          </div>
      
            <h4>Categories</h4>
          <div class= 'form-row'>
            <label for= 'vegetarian' class='container'>Vegetarian
            <input type= 'checkbox' id='vegetarian' name='vegetarian' value="vegetarian">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'vegan' class='container'>Vegan
            <input type= 'checkbox' id='vegan' name='vegan' value="vegan">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'glutenFree' class='container'>Gluten Free
            <input type= 'checkbox' id='glutenFree' name='glutenFree' value="glutenFree">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'Ketogenic' class='container'>Ketogenic
            <input type= 'checkbox' id='Ketogenic' name='Ketogenic' value="ketogenic">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'ovo-vegetarian' class='container'>Ovo-Vegetarian
            <input type= 'checkbox' id='ovo-vegetarian' name='veryHealthy' value="ovo-vegetarian">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'paleo' class='container'>Paleo
            <input type= 'checkbox' id='paleo' name='paleo' value="paleo">
            <span class="checkmark"></span>
            </label>
          </div>
      
          
        
        <button type="submit" id='cat_button' >Submit</button>
      </form>
            </main>
        `);
        navarrow =1;

        }
        else if (navarrow === 3){
            $('#title_text').text('Your Results');
        $('main').empty();
        $('body').css({'height':'100%'});
        

            $('header').append(`
            <i class="fas fa-arrow-left" id=arrowback ></i>
            <h2 id='title_text'>Grocery List</h2>
         `);
         
            $('body').append(` <main><div class='results_box' id='top_box' >
            <h5>Grocery List</h5>
            <i class="fas fa-shopping-cart" id='pics'></i>
        </div>
        <div class='results_box' id='bottom_box'>
            <h5> Recipes</h5>
            <i class="fas fa-utensils" id='pics'></i>
        </div>
            </main>
        `);
        $('footer').css({'position':'fixed',
        'margin-top':'40px',
        'bottom':'0',
    });
        $('main').css({ 'display':'flex','flex-direction':'column','height':'100%','justify-content': 'space-evenly'});
        navarrow=2;
        }
        else {

        }
    });
}




function runSubmit(){

}


function checkParams(){
let categoriesBox ={
  breakfast: $('html').find('#Breakfast').prop("checked"),
  lunch : $('html').find('#Lunch').prop("checked"),
  dinner :$('html').find('#Dinner').prop("checked"),
  'all day' :$('html').find('#allday').prop("checked"),

  vegetarian : $('html').find('#vegetarian').prop("checked"),
  vegan : $('html').find('#vegan').prop("checked"),
  'gluten free' : $('html').find('#glutenFree').prop("checked"),
  Ketogenic : $('html').find('#Ketogenic').prop("checked"),
  "ovo-vegetarian" : $('html').find('#ovo-vegetarian').prop("checked"),
  paleo : $('html').find('#paleo').prop("checked")
}
  if (categoriesBox['all day'] === true || (categoriesBox.breakfast === true &&        categoriesBox.lunch === true && categoriesBox.dinner === true)){
    categoriesBox.allday = false ;
    categoriesBox.breakfast = true;
    categoriesBox.lunch = true;
    categoriesBox.dinner = true;
    delete categoriesBox['all day'];
  }
  console.log(categoriesBox);
  
  // let transportArray = Object.keys(categoriesBox).map(key => `${key}: ${categoriesBox[key]}`);
  formatParams(categoriesBox);

}

function formatParams(array){
 
  for (let i = 0 ; i <10 ; i++){

    console.log('hello');


    let holder = Object.keys(array)[i];
     if ((holder === 'breakfast' && array[holder] === true) || ( holder === 'lunch'  && array[holder] === true) || ( holder === 'dinner' && array[holder] === true)){
        let part = createURL(array, holder);
     }
    }
  }
  function createURL(array, holder){
    let emptyTransport = [holder];
    let newarray = array;
    let i =0;
    if (newarray['breakfast'] === true){
      i = 4;
    }
    else if (newarray['lunch'] === true){
      i = 4;
    }
    
    else if (newarray['dinner'] === true){
      i =4;
    }
    for ( i ; i <10 ; i++){
      console.log('in createURL function');
      let list = Object.keys(array)[i];
    if (newarray[list] === true){
      emptyTransport.push(list);
    }
  }
  console.log(emptyTransport);
  let urlSearchTags = emptyTransport.join('%2C');
  console.log(urlSearchTags);
  
}

function runfetch(){

  let url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=1";
  const params = {
  
  }
  const options = {
    headers: new Headers({
      "X-RapidAPI-Host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "2c894d0d43msh85c363aa10f7131p1906eejsn3585c14e851b",
      "cheap:": "true"
    })
  };




fetch(url, options)
  .then(response => response.json())
  .then (responseJson => console.log(responseJson));

}

















function loadScript(){
    initGroceryBuddy();
    submitClick();
    boxClick();
    navarrowClick();
    recipeClick();
}

$(loadScript);
