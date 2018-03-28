import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tradeTable.css';

class TradeTable extends Component {
    render() {
        const {tblContent = [], title = ''} = this.props;
        let tblTitles = [];

        // get name of properties from tblContent to make them columns name in the table
        if (tblContent.length > 0) {
            tblTitles = Object.keys(tblContent[0]).filter(item => (item === 'created_at' || item === 'text'));
        }

        const renderTblHeader =
            tblTitles.map((item, index) => (
                <th key={index}>{item}</th>
            ));

        const renderTblContent =
            tblContent.map((item, index) => (
                <tr key={index}>
                    {tblTitles.map((name, index2) => (
                        <td key={index2}>{item[name]}</td>
                    ))}
                </tr>
            ));

        return (
            <div>
                <div>
                    <h5 className="card-title text-info">Last 15 tweets with hashtags: <b>{title}</b></h5>

                    <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                        <thead>
                        <tr>
                            {renderTblHeader}
                        </tr>
                        </thead>
                        <tbody>
                        {renderTblContent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

TradeTable.propTypes = {
    title: PropTypes.string.isRequired,
    tblContent: PropTypes.array.isRequired,
};

export default TradeTable;
