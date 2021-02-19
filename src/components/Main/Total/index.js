import { connect } from "react-redux";
import Card from "./Card";

const Total = ({ data: { global, loading } }) => {
  const nf = new Intl.NumberFormat();
    return (
      <div className="total">
        <Card title="Confirmed" data={nf.format(global.TotalConfirmed)} loading={loading}/>
        <Card title="Recovered" data={nf.format(global.TotalRecovered)} loading={loading}/>
        <Card title="Deaths" data={nf.format(global.TotalDeaths)} loading={loading}/>
      </div>
    );
  }
  

const mapStateToProps = state => ({
  data: state.data
})
  
export default connect(mapStateToProps)(Total);