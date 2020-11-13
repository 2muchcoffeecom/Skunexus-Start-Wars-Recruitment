import './Grid.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Grid({data: {header = [], values = [], actions = [], customColumns}}) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && <th>Actions</th>}
          {customColumns && <>
            <th>Residents</th>
            <th>Films</th>
          </>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) => <td key={colName}>{row[colName]}</td>)}
            {!!actions.length &&
              <td className='gridActions'>
                {actions.map(({link, label, action}) => <Link key={link} to={link}>
                  <button onClick={() => action(row)}>{label}</button>
                </Link>)}
                <a href={row.url}>
                  <button>Go to Details</button>
                </a>
              </td>
            }
            {customColumns && <>
              <td>{row.residents.length}</td>
              <td>{row.films.length}</td>
            </>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.array,
    values: PropTypes.array,
    actions: PropTypes.array,
    customColumns: PropTypes.bool,
  })
};

export default Grid;
