import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './main.css';
import books from './data';

class Header extends Component{
    render(){
        return (
            <nav>
                <div className="logo ">
                    <h2 className="text-center ">My Most Favourite Programming Books</h2>
                </div>
            </nav>
        )
    }
}

class Book extends Component{
    render(){
        return(
            <div className="list-group-item book">
                    <div className="book-image">
                        <p>Book Image</p>
                    </div>
                    <div className="book-info">
                            <h3 className="text-info">{this.props.name} by <span>{this.props.author}</span></h3>
                            <p className="category">
                                       {this.props.description}
                            </p>
                            <div className="extra">
                                <small>
                                        Year: <span className="text-danger">{this.props.year}</span>
                                </small>
                                <br></br>
                                <small className="extra">
                                        Category: <span className="text-success">{this.props.category}</span> 
                                </small>
                            </div>
                    </div>
                    
            </div>
        )
    }
}

class BookList extends Component{
    render(){
        const booklist=books.sort((a,b)=>(
                b.year - a.year
        ));

        const bookComponents=booklist.map((book)=>(
            
            <Book
              key={'book-' + book.id}
              id={book.id}
              category={book.category}
              description={book.description}
              year={book.year}
              author={book.author}
              name={book.name}
            />

        
        ));


        return(
            <div className="list-group">
                {bookComponents}
            </div>
        )
    }
}



class Page extends Component{
    render(){
        return(
            <React.Fragment>
                    <Header/>
                
                    <div className="container">
                    
                        <BookList/>
                    </div>
            </React.Fragment>
        )
        
    }
}

ReactDOM.render(<Page/>,document.getElementById('root'));