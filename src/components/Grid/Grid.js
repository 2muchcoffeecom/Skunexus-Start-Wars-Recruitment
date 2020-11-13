import React from "react";
import './Grid.css';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function Grid({data: {header = [], values = [], actions = [], customColumns, isActionDisplay}}) {
  return (
    <table className='gridTable'>
      <thead>
        <tr>
          {header.map(colName => <th key={colName}>{colName}</th>)}
          {!!actions.length && isActionDisplay && <th>Actions</th>}
          {customColumns && <>
            <th>Residents</th>
            <th>Films</th>
          </>}
        </tr>
      </thead>
      <tbody>
        {values.map((row, index) => (
          <tr key={index}>
            {header.map((colName) =>
              <td key={colName} className={!isNaN(Number(row[colName])) ? 'alignRight' : 'alignCenter'}>{row[colName]}</td>
            )}
            {!!actions.length && isActionDisplay &&
              <td className='gridActions'>
                {actions.map(({link, label, action}) => <Link key={link} to={link}>
                  {(link === "/films" && !!row.films.length && <button onClick={() => action(row)}>{label}</button>) ||
                  (link === "/residents" && !!row.residents.length && <button onClick={() => action(row)}>{label}</button>)}
                </Link>)}
                <a href={row.url}>
                  <button>Go to Details</button>
                </a>
              </td>
            }
            {customColumns && <>
              <td className='alignRight'>{row.residents.length}</td>
              <td className='alignRight'>{row.films.length}</td>
            </>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Grid.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.array.isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
      action: PropTypes.func
    })),
    customColumns: PropTypes.bool,
    isActionDisplay: PropTypes.bool,
  })
};

export default Grid;
