import './card.css';

function CardReverse(props) {

  // const { story, description, headingLevel } = this.props;

  // const Title = headingLevel;

  // const headline = '';

  return (
    <article className="card card--rightImage MarginBottom10vh centred">
      <div className="card__info">
        <h2 className="card__headline">{props.headline}</h2>
        <p className="card__subtitle">{props.subtitle}</p>

        <div className="card__facts">
          <h3>{props.date}</h3>
          <h3>Read in {props.readTime} mins</h3>
        </div>

      </div>


      <img className="card__image" alt={props.assistiveText} src={'https://source.unsplash.com/random'}></img>
    </article>
  )
}

// const article = {
//   article: {
//     name: 'Two penguins are celebrating Brads birthday',
//     imageURL: 'https://unsplash.com/photos/MvOj8LsFnwI',
//   },
// };



export default CardReverse;