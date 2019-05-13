let navarrow = 0;




function initGame(){
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
        event.preventDefault();
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
    $('html').on('click','#top_box', function(event){
        $('#title_text').text('Grocery List');
        let results = renderGroceryList();
       $('footer').css({'position':'relative'});
       $('body').css({'height':'auto'});
        $('main').empty();
        $('main').html(results);
        navarrow=3;
    });
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
  
        <label for= 'dairyFree' class='container'>Dairy Free
        <input type= 'checkbox' id='dairyFree' name='dairyFree' value="dairyFree">
        <span class="checkmark"></span>
        </label>
  
        <label for= 'veryHealthy' class='container'>Healthy
        <input type= 'checkbox' id='veryHealthy' name='veryHealthy' value="veryHealthy">
        <span class="checkmark"></span>
        </label>
  
        <label for= 'cheap' class='container'>Cheap
        <input type= 'checkbox' id='cheap' name='cheap' value="cheap">
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
      
            <label for= 'dairyFree' class='container'>Dairy Free
            <input type= 'checkbox' id='dairyFree' name='dairyFree' value="dairyFree">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'veryHealthy' class='container'>Healthy
            <input type= 'checkbox' id='veryHealthy' name='veryHealthy' value="veryHealthy">
            <span class="checkmark"></span>
            </label>
      
            <label for= 'cheap' class='container'>Cheap
            <input type= 'checkbox' id='cheap' name='cheap' value="cheap">
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
        }
        else {

        }
    });
}



function loadScript(){
    initGame();
    submitClick();
    boxClick();
    navarrowClick();
}

$(loadScript);