import Spinner from "../../shared/BaseSpinner";

const Card = ({ title, data, loading }) => {
    return (
        <div className="flex-v total-card">
            <h3> {title} :</h3> 
            { loading ? <Spinner /> : <h2> {data} </h2> }
        </div>
    );
  }
  
export default (Card)