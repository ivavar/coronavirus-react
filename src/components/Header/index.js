import { changeTheme } from "../../actions/theme";
import { connect } from "react-redux";
import BaseSwitch from "../shared/BaseSwitch";
import PropTypes from "prop-types";
import { FaRegSun } from "react-icons/fa";

const Header = ({ changeTheme }) => {
    return (
        <nav className="navbar">
        <h1>Coronavirus</h1>
        <div className="flex-h align-center">
          <button 
            className="btn-switch" 
            onClick={() => changeTheme()}> 
              <BaseSwitch /> 
          </button>
        <FaRegSun />
      </div>
    </nav>
  );
}

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(mapStateToProps, {changeTheme})(Header);