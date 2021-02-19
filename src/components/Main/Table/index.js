import { connect } from "react-redux";
import Data from "./Data";
import Search from "./Search";

const Table = ({ data: { countries, loading } }) => {
  return (
      <div className="main">
        <Search data={countries} />
        <Data data={countries} loading={loading} />
      </div>
  );
}

const mapStateToProps = state => ({
    data: state.data
  })
    
export default connect(mapStateToProps)(Table);