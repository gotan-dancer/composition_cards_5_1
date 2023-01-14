import logo from './logo.svg';
import './App.css';

function Img( {img_src, img_alt} )
{
    return(
        <div>
            <img src={img_src} class="card-img-top" alt={img_alt}></img>
        </div>
    );
}

function Card( {children} )
{
    return(
        <div>{children}</div>
    );
}


function App() 
{
    return(
        <div>
            <Card>
                <div class="card" style="width: 18rem;">
                    <Img img_src="..." img_alt="..."></Img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </Card>
            <Card>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>          
            </Card>
        </div>
  );
}

export default App;
