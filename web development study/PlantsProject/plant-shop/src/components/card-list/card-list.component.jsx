import Card from "./card/card.component";

import './card-list.styles.css';

// const CardList = (props) => {
//   const { plants } = props;

//   return (
//     <div className="card-list">
//       {plants.map((plant) => {
//         return <Card key={plant.id} plant={plant} />
//       })}
//     </div>
//   )
// }

// IMPLICIT RETURN
const CardList = ({ plants }) => (
  <div className="card-list">
      {plants.map((plant) => {
        return <Card key={plant.id} plant={plant} />
      })}
    </div>
);

export default CardList;