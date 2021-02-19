import Spinner from "../../shared/BaseSpinner";

const Data = ({ data, loading }) => {
    const rows = data.map((item) => (
        <tr key={item.ID}>
            <td className="text-left">{item.Country}</td>
            <td>{item.NewConfirmed}</td>
            <td>{item.TotalConfirmed}</td>
            <td>{item.NewDeaths}</td>
            <td>{item.TotalDeaths}</td>
            <td>{item.NewRecovered}</td>
            <td>{item.TotalRecovered}</td>
        </tr>
    ));
    return (
        <div className="flex-v">
            <table className="table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>New confirmed</th>
                        <th>Total confirmed</th>
                        <th>New deaths</th>
                        <th>Total deaths</th>
                        <th>New recovered</th>
                        <th>Total recovered</th>
                    </tr>
                </thead>
                { loading ? <Spinner/> : <tbody> {rows} </tbody> }
            </table>
        </div>
    );
  }
  
export default (Data);