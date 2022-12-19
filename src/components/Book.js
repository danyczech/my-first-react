import "./Book.css";
import OrderButton from "./OrderButton";

const Book = (props) => {
  return (
    <div className="one-book">
      <img src={props.myimage} alt="" />
      <h2 className="book-heading">{props.mytitle}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        voluptas, voluptatibus nulla accusamus necessitatibus eligendi quasi
        autem numquam nam. Nemo velit facere omnis tempora aperiam in
        consequatur itaque hic. Est.
      </p>
      <OrderButton />
    </div>
  );
};

export default Book;
