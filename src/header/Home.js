import React from 'react';
import '../header/home.scss';


const Home = (props) => {
    return(
        <section>
<div class ='cover1'> </div>
<div class ='tit'>
<h1> Your opportunity to volunteer!</h1>
</div>
        <div>
        <div class="container">
        <div class="row align-items-center" >
        <div class="col-lg-6 order-lg-2">
        <div class="p-1">
        <div class='img1'>
        <img class="img-fluid rounded-circle" src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'></img>
        </div>
        <h1 class="text1"> More people, More impact. </h1>
        <p>With more volunteers and more volunteer opportunities, Our Website is how good people and good causes get connected.</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div>
        <div class="container">
        <div class="row align-items-center" >
        <div class="col-lg-6">
        <div class="p-5">
        <div class='img2'>
            <img class="img-fluid rounded-circle" src='https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'></img>
        </div>
        <h1 class="display-4" class="text2">Nonprofits</h1>
        <p>It's a portal for volunteers to connect with the nonprofits, and in a way, it's its own search engine specifically for volunteer opportunities."</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        
        </section>
    );
}




export default Home;
